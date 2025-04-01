import os
import re
import subprocess
import requests
import json

GITHUB_BASE = "https://raw.githubusercontent.com/hashcloak/semaphore-noir/noir-support/packages/circuits-noir"
TEMP_DIR = "circuits_temp"
SRC_DIR = os.path.join(TEMP_DIR, "src")
MAIN_NR = os.path.join(SRC_DIR, "main.nr")
NARGO_TOML = os.path.join(TEMP_DIR, "Nargo.toml")

def setup_temp_dir():
    os.makedirs(SRC_DIR, exist_ok=True)
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

def compile_circuit():
    subprocess.run(
        ["nargo", "compile"],
        cwd=TEMP_DIR,
        check=True,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL
    )

def get_gate_info():
    result = subprocess.run(
        ["bb", "gates", "-b", os.path.join(TEMP_DIR, "target", "circuit.json")],
        capture_output=True,
        text=True
    )
    output = result.stdout
    parsed = json.loads(output)
    info = parsed["functions"][0]
    return info["acir_opcodes"], info["circuit_size"]

def main():
    setup_temp_dir()
    print(f"{'MAX_DEPTH':>10} | {'acir_opcodes':>12} | {'circuit_size':>14}")
    print("-" * 42)
    for depth in range(1, 33):
        replace_max_depth(depth)
        compile_circuit()
        opcodes, size = get_gate_info()
        print(f"{depth:>10} | {opcodes:>12} | {size:>14}")

if __name__ == "__main__":
    main()
