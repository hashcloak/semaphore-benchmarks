import os
import re
import subprocess
import requests
import json
import time

# Tree depths for which we run the benches
DEPTHS = [1, 7, 9, 10, 11]
GITHUB_BASE = "https://raw.githubusercontent.com/hashcloak/semaphore-noir/noir-support/packages/circuits-noir"
TEMP_DIR = "circuits_temp"
SRC_DIR = os.path.join(TEMP_DIR, "src")
MAIN_NR = os.path.join(SRC_DIR, "main.nr")
NARGO_TOML = os.path.join(TEMP_DIR, "Nargo.toml")

def setup_temp_dir():
    os.makedirs(SRC_DIR, exist_ok=True)
    os.makedirs(os.path.join(TEMP_DIR, "proof"), exist_ok=True)
    os.makedirs(os.path.join(TEMP_DIR, "vk"), exist_ok=True)
    files = {
        NARGO_TOML: f"{GITHUB_BASE}/Nargo.toml",
        MAIN_NR: f"{GITHUB_BASE}/src/main.nr"
    }
    for local_path, url in files.items():
        r = requests.get(url)
        r.raise_for_status()
        with open(local_path, "w") as f:
            f.write(r.text)

def replace_max_depth(depth):
    with open(MAIN_NR, "r") as f:
        content = f.read()
    new_content = re.sub(
        r"pub global MAX_DEPTH: u32 = \d+;",
        f"pub global MAX_DEPTH: u32 = {depth};",
        content
    )
    with open(MAIN_NR, "w") as f:
        f.write(new_content)

def generate_prover_toml(depth):
    subprocess.run([
        "node", "generate_prover_toml.js",
        str(depth),
        os.path.join(TEMP_DIR, "Prover.toml")
    ], check=True)

def timed_run(cmd, cwd=None):
    start = time.perf_counter()
    subprocess.run(cmd, cwd=cwd, check=True)
    return (time.perf_counter() - start) * 1000

def run_benchmark_for_depth(depth):
    replace_max_depth(depth)
    generate_prover_toml(depth)

    witness = timed_run(["nargo", "execute"], cwd=TEMP_DIR)
    proof = timed_run(["bb", "prove", "-b", f"{TEMP_DIR}/target/circuit.json", "-w", f"{TEMP_DIR}/target/circuit.gz", "-o", f"{TEMP_DIR}/proof"])
    subprocess.run(["bb", "write_vk", "-b", f"{TEMP_DIR}/target/circuit.json", "-o", f"{TEMP_DIR}/vk"], check=True)
    verify = timed_run(["bb", "verify", "-k", f"{TEMP_DIR}/vk/vk", "-p", f"{TEMP_DIR}/proof/proof"])
    return witness, proof, verify

def main():
    setup_temp_dir()
    results = []

    for depth in DEPTHS:
        witness, proof, verify = run_benchmark_for_depth(depth)
        results.append((depth, witness, proof, verify))

    # Print the table with results
    print(f"{'MAX_DEPTH':>10} | {'Witness (ms)':>14} | {'Proof (ms)':>12} | {'Verify (ms)':>13}")
    print("-" * 55)
    for depth, witness, proof, verify in results:
        print(f"{depth:>10} | {witness:>14.2f} | {proof:>12.2f} | {verify:>13.2f}")


if __name__ == "__main__":
    main()