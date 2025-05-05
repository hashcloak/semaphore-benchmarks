# Benchmarks - NOIR SEMAPHORE

Version details:
- `nargo version = 1.0.0-beta.3`
- `bb 0.82.2`
- `@aztec/bb.js 0.82.2`
- `@noir-lang/noir_js 1.0.0-beta.3`
- `@noir-lang/noir_wasm 1.0.0-beta.3`

## SDK 

Benchmarks from `node`. 

Machine details: MacBook Air, Apple M2 (8-core, 3.49 GHz), 16 GB RAM.

### Proof generation (with backend pre-initialized)
```
yarn ts-node src/generate-proof.ts
```

| Function                                           | ops/sec | Avg Time (ms)  | Samples |
|----------------------------------------------------|---------|----------------|---------|
| Generate Proof 1 Member [Max tree depth 1]         | 0       | 296.87         | 10      |
| Generate Proof 100 Members [Max tree depth 7]      | 0       | 412.60         | 10      |
| Generate Proof 500 Members [Max tree depth 9]      | 0       | 454.38         | 10      |
| Generate Proof 1000 Members [Max tree depth 10]    | 0       | 483.66         | 10      |
| Generate Proof 2000 Members [Max tree depth 11]    | 0       | 538.07         | 10      |

### Proof verification (with backend pre-initialized)
```
yarn ts-node src/verify-proof.ts
```

| Function                                           | ops/sec | Avg Time (ms) | Samples |
|----------------------------------------------------|---------|----------------|---------|
| Verify Proof 1 Member [Max tree depth 1]           | 67       | 14.85         | 10      |
| Verify Proof 100 Members [Max tree depth 7]        | 66       | 15.12         | 10      |
| Verify Proof 500 Members [Max tree depth 9]        | 66       | 15.10         | 10      |
| Verify Proof 1000 Members [Max tree depth 10]      | 66       | 15.06         | 10      |
| Verify Proof 2000 Members [Max tree depth 11]      | 64       | 15.47         | 10      |

### Proof generation + bakend initialization
```
yarn ts-node src/generate-proof.ts
```

| Function                                                                 | ops/sec | Avg Time (ms) | Samples |
|--------------------------------------------------------------------------|---------|----------------|---------|
| Generate Proof 1 Member + Initialize backend [Max tree depth 1]          | 0       | 547.23         | 10      |
| Generate Proof 100 Members + Initialize backend [Max tree depth 7]       | 0       | 705.19         | 10      |
| Generate Proof 500 Members + Initialize backend [Max tree depth 9]       | 0       | 760.26         | 10      |
| Generate Proof 1000 Members + Initialize backend [Max tree depth 10]     | 0       | 822.15         | 10      |
| Generate Proof 2000 Members + Initialize backend [Max tree depth 11]     | 0       | 885.36         | 10      |

### Proof verification + backend initialization
```
yarn ts-node src/verify-proof.ts
```

| Function                                                                | ops/sec  | Avg Time (ms) | Samples |
|-------------------------------------------------------------------------|----------|---------------|---------|
| Verify Proof 1 Member + Initialize backend [Max tree depth 1]           | 67       | 194.27        | 10      |
| Verify Proof 100 Members + Initialize backend [Max tree depth 7]        | 66       | 224.15        | 10      |
| Verify Proof 500 Members + Initialize backend [Max tree depth 9]        | 66       | 233.42        | 10      |
| Verify Proof 1000 Members + Initialize backend [Max tree depth 10]      | 66       | 237.17        | 10      |
| Verify Proof 2000 Members + Initialize backend [Max tree depth 11]      | 64       | 247.10        | 10      |

### UltraHonkBackend Initialization
| Function                                           | ops/sec | Avg Time (ms)  | Samples |
|----------------------------------------------------|---------|----------------|---------|
| Initialize Backend Tree Depth 1                    | 5       | 185.58         | 10      |
| Initialize Backend Tree Depth 10                   | 4       | 222.44         | 10      |
| Initialize Backend Tree Depth 20                   | 3       | 276.05         | 10      |
| Initialize Backend Tree Depth 32                   | 2       | 365.78         | 10      |


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
| Generate Proof 1 Member [Max tree depth 1]         | 1       | 797.18         | 10      |
| Generate Proof 100 Members [Max tree depth 7]      | 0       | 1315.42        | 10      |
| Generate Proof 500 Members [Max tree depth 9]      | 0       | 1457.08        | 10      |
| Generate Proof 1000 Members [Max tree depth 10]    | 0       | 1528.59        | 10      |
| Generate Proof 2000 Members [Max tree depth 11]    | 0       | 1815.77        | 10      |


## Nargo witness & proof generation, proof verification

| MAX_DEPTH | Witness (ms) | Proof (ms) | Verify (ms) |
|-----------|---------------|------------|--------------|
|         1 |        850.52 |     261.05 |        49.20 |
|         7 |       1181.96 |     419.18 |        48.99 |
|         9 |       1350.19 |     408.28 |        49.86 |
|        10 |       1478.30 |     431.82 |        49.99 |
|        11 |       1553.66 |     495.16 |        53.55 |

#### Gas estimates

| Function                                                        |Gas Usage|
|-----------------------------------------------------------------|---------|
| SemaphoreNoir.verifyProof 1 Member [Max tree depth 1]           |1856690  |
| SemaphoreNoir.verifyProof 100 Members [Max tree depth 7]        |1887944  |
| SemaphoreNoir.verifyProof 500 Members [Max tree depth 9]        |1887800  |
| SemaphoreNoir.verifyProof 1000 Members [Max tree depth 10]      |1887896  |
| SemaphoreNoir.verifyProof 2000 Members [Max tree depth 11]      |1919115  |

| Function                                                        |Gas Usage|
|-----------------------------------------------------------------|---------|
| SemaphoreNoir.validateProof 1 Member [Max tree depth 1]         |1996899  |
| SemaphoreNoir.validateProof 100 Members [Max tree depth 7]      |2027997  |
| SemaphoreNoir.validateProof 500 Members [Max tree depth 9]      |2028057  |
| SemaphoreNoir.validateProof 1000 Members [Max tree depth 10]    |2028093  |
| SemaphoreNoir.validateProof 2000 Members [Max tree depth 11]    |2059288  |
