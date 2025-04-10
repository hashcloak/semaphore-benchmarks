# Benchmarks - NOIR SEMAPHORE

Version details:
- `nargo version = 1.0.0-beta.3`
- `bb 0.82.2`
- `@aztec/bb.js 0.82.2`
- `@noir-lang/noir_js 1.0.0-beta.3`
- `@noir-lang/noir_wasm 1.0.0-beta.3`

## SDK 

Benchmarks from `node`. 

Machine details:
- Computer: MacBook Pro
- Chip: Intel Core i7 (6-core, 2.6 GHz)
- Memory (RAM): 32 GB
- Operating System: macOS Ventura version 13.7.4

### Proof generation

| Function                                           | ops/sec | Avg Time (ms) | Samples |
|----------------------------------------------------|---------|----------------|---------|
| Generate Proof 1 Member [Max tree depth 1]         | 0       | 1710.65        | 10      |
| Generate Proof 100 Members [Max tree depth 7]      | 0       | 2311.87        | 10      |
| Generate Proof 500 Members [Max tree depth 9]      | 0       | 2398.87        | 10      |
| Generate Proof 1000 Members [Max tree depth 10]    | 0       | 2600.24        | 10      |
| Generate Proof 2000 Members [Max tree depth 11]    | 0       | 3004.17        | 10      |

### Proof verification
```
yarn ts-node src/verify-proof.ts
```

| Function                                           | ops/sec | Avg Time (ms) | Samples |
|----------------------------------------------------|---------|----------------|---------|
| Verify Proof 1 Member [Max tree depth 1]           | 1       | 974.98         | 10      |
| Verify Proof 100 Members [Max tree depth 7]        | 0       | 1359.02        | 10      |
| Verify Proof 500 Members [Max tree depth 9]        | 0       | 1490.25        | 10      |
| Verify Proof 1000 Members [Max tree depth 10]      | 0       | 1527.17        | 10      |
| Verify Proof 2000 Members [Max tree depth 11]      | 0       | 1898.70        | 10      |

## Circuit

Gatecounts from `gatecount`. 

| MAX_DEPTH | acir_opcodes | circuit_size |
|-----------|--------------|--------------|
|         1 |         2822 |         7756 |
|         2 |         3149 |         8696 |
|         3 |         3476 |         9636 |
|         4 |         3803 |        10576 |
|         5 |         4130 |        11516 |
|         6 |         4457 |        12456 |
|         7 |         4784 |        13397 |
|         8 |         5111 |        14336 |
|         9 |         5438 |        15276 |
|        10 |         5765 |        16217 |
|        11 |         6092 |        17157 |
|        12 |         6419 |        18096 |
|        13 |         6746 |        19037 |
|        14 |         7073 |        19977 |
|        15 |         7400 |        20917 |
|        16 |         7727 |        21857 |
|        17 |         8054 |        22797 |
|        18 |         8381 |        23737 |
|        19 |         8708 |        24678 |
|        20 |         9035 |        25617 |
|        21 |         9362 |        26557 |
|        22 |         9689 |        27498 |
|        23 |        10016 |        28438 |
|        24 |        10343 |        29377 |
|        25 |        10670 |        30318 |
|        26 |        10997 |        31258 |
|        27 |        11324 |        32198 |
|        28 |        11651 |        33138 |
|        29 |        11978 |        34078 |
|        30 |        12305 |        35018 |
|        31 |        12632 |        35959 |
|        32 |        12959 |        36898 |

<!-- 
 MAX_DEPTH | acir_opcodes |   circuit_size
------------------------------------------
         1 |         2822 |           7756
         2 |         3149 |           8696
         3 |         3476 |           9636
         4 |         3803 |          10576
         5 |         4130 |          11516
         6 |         4457 |          12456
         7 |         4784 |          13397
         8 |         5111 |          14336
         9 |         5438 |          15276
        10 |         5765 |          16217
        11 |         6092 |          17157
        12 |         6419 |          18096
        13 |         6746 |          19037
        14 |         7073 |          19977
        15 |         7400 |          20917
        16 |         7727 |          21857
        17 |         8054 |          22797
        18 |         8381 |          23737
        19 |         8708 |          24678
        20 |         9035 |          25617
        21 |         9362 |          26557
        22 |         9689 |          27498
        23 |        10016 |          28438
        24 |        10343 |          29377
        25 |        10670 |          30318
        26 |        10997 |          31258
        27 |        11324 |          32198
        28 |        11651 |          33138
        29 |        11978 |          34078
        30 |        12305 |          35018
        31 |        12632 |          35959
        32 |        12959 |          36898
 -->

## Browser

### Proof generation

| Function                                           | ops/sec | Avg Time (ms) | Samples |
|----------------------------------------------------|---------|----------------|---------|
| Generate Proof 1 Member [Max tree depth 1]         | 1       | 978.54         | 10      |
| Generate Proof 100 Members [Max tree depth 7]      | 0       | 1543.11        | 10      |
| Generate Proof 500 Members [Max tree depth 9]      | 0       | 1717.46        | 10      |
| Generate Proof 1000 Members [Max tree depth 10]    | 0       | 1843.71        | 10      |
| Generate Proof 2000 Members [Max tree depth 11]    | 0       | 2120.75        | 10      |