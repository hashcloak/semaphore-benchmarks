# Benchmarks for `bb`

This expects `nargo` and `bb` are installed on the machine. 

## Witness generation & proof generation and verification timings

Run:
```
python3 benchmark_runner.py
```

This does a single run for witness generation, proof generation and proof verification for the depths in the script (by default: 1, 7, 9, 10, 11).

## Gatecount
### Setup

To set up the environment the first time:

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### Run the script

After setup, to rerun the gatecounts:

```bash
source venv/bin/activate
python get_gatecounts.py
```

This will print the gatecounts for depths 1..32 to the console. 

When you're done, exit the virtual environment with:

```bash
deactivate
```

### Cleanup (if needed)

To remove the virtual environment and temporary circuit files:

```bash
rm -rf venv circuits_temp
```