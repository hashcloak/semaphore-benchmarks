# Benchmarks - NOIR SEMAPHORE

Version details:
- `nargo version = 1.0.0-beta.5`
- `bb 0.82.2`
- `@aztec/bb.js 0.82.2`
- `@noir-lang/noir_js 1.0.0-beta.5`
- `@noir-lang/noir_wasm 1.0.0-beta.5`

## SDK 

Benchmarks from `node`. 

- Computer: MacBook Air
- Chip: Apple M2 (8-core, 3.49 GHz)
- Memory (RAM): 16 GB
- Operating System: macOS Sequoia version 15.3.1

### Proof generation (with backend pre-initialized)
```
yarn ts-node src/generate-proof.ts
```

| Function                                           | ops/sec | Avg Time (ms)  | Samples |
|----------------------------------------------------|---------|----------------|---------|
| Generate Proof 1 Member [Max tree depth 1]         | 0       | 296.39         | 10      |
| Generate Proof 100 Members [Max tree depth 7]      | 0       | 437.36         | 10      |
| Generate Proof 500 Members [Max tree depth 9]      | 0       | 476.52         | 10      |
| Generate Proof 1000 Members [Max tree depth 10]    | 0       | 501.09         | 10      |
| Generate Proof 2000 Members [Max tree depth 11]    | 0       | 559.14         | 10      |

### Proof verification (with backend pre-initialized)
```
yarn ts-node src/verify-proof.ts
```

| Function                                           | ops/sec | Avg Time (ms) | Samples |
|----------------------------------------------------|---------|----------------|---------|
| Verify Proof 1 Member [Max tree depth 1]           | 67       | 14.88         | 10      |
| Verify Proof 100 Members [Max tree depth 7]        | 66       | 15.12         | 10      |
| Verify Proof 500 Members [Max tree depth 9]        | 66       | 15.13         | 10      |
| Verify Proof 1000 Members [Max tree depth 10]      | 66       | 15.08         | 10      |
| Verify Proof 2000 Members [Max tree depth 11]      | 64       | 15.44         | 10      |

### Proof generation + bakend initialization
```
yarn ts-node src/generate-proof.ts
```

| Function                                                                 | ops/sec | Avg Time (ms) | Samples |
|--------------------------------------------------------------------------|---------|----------------|---------|
| Generate Proof 1 Member + Initialize backend [Max tree depth 1]          | 0       | 541.11         | 10      |
| Generate Proof 100 Members + Initialize backend [Max tree depth 7]       | 0       | 736.06         | 10      |
| Generate Proof 500 Members + Initialize backend [Max tree depth 9]       | 0       | 790.73         | 10      |
| Generate Proof 1000 Members + Initialize backend [Max tree depth 10]     | 0       | 837.24         | 10      |
| Generate Proof 2000 Members + Initialize backend [Max tree depth 11]     | 0       | 928.97         | 10      |

### Proof verification + backend initialization
```
yarn ts-node src/verify-proof.ts
```

| Function                                                                | ops/sec  | Avg Time (ms) | Samples |
|-------------------------------------------------------------------------|----------|---------------|---------|
| Verify Proof 1 Member + Initialize backend [Max tree depth 1]           | 67       | 193.53        | 10      |
| Verify Proof 100 Members + Initialize backend [Max tree depth 7]        | 66       | 224.11        | 10      |
| Verify Proof 500 Members + Initialize backend [Max tree depth 9]        | 66       | 231.21        | 10      |
| Verify Proof 1000 Members + Initialize backend [Max tree depth 10]      | 66       | 235.15        | 10      |
| Verify Proof 2000 Members + Initialize backend [Max tree depth 11]      | 64       | 245.46        | 10      |

### UltraHonkBackend Initialization
| Function                                           | ops/sec | Avg Time (ms)  | Samples |
|----------------------------------------------------|---------|----------------|---------|
| Initialize Backend Tree Depth 1                    | 5       | 178.29         | 10      |
| Initialize Backend Tree Depth 10                   | 4       | 217.49         | 10      |
| Initialize Backend Tree Depth 20                   | 3       | 269.87         | 10      |
| Initialize Backend Tree Depth 32                   | 2       | 337.06         | 10      |

### Batching
```
yarn ts-node src/batching.ts
```

Proof Generation Benches (keccak = true)
|       Function         | ops/sec | Avg time (ms) | Samples |
|------------------------|---------|---------------|---------|
|  Generate batch of 10  |    0    |     98977     |    3    |
|  Generate batch of 20  |    0    |     211168    |    3    |
|  Generate batch of 30  |    0    |     327370    |    3    |
|  Generate batch of 100 |    0    |     1233135   |    3    |



Proof Verification Benches (keccak = true)
|       Function       | ops/sec | Avg time (ms) | Samples |
|----------------------|---------|---------------|---------|
|  Verify batch of 10  |    22   |     34        |    11   |
|  Verify batch of 20  |    26   |     32        |    14   |
|  Verify batch of 30  |    31   |     32        |    16   |
|  Verify batch of 100 |    25   |     40        |    13   |

#### Generat a single semaphore proof for batching

| Function                                                          | ops/sec | Avg Time (ms)  | Samples |
|-------------------------------------------------------------------|---------|----------------|---------|
| Generate Proof (for batching) 1 Member [Max tree depth 1]         | 4       | 235.14         | 10      |
| Generate Proof (for batching) 100 Members [Max tree depth 7]      | 3       | 336.97         | 10      |
| Generate Proof (for batching) 500 Members [Max tree depth 9]      | 2       | 356.95         | 10      |
| Generate Proof (for batching) 1000 Members [Max tree depth 10]    | 2       | 375.09         | 10      |
| Generate Proof (for batching) 2000 Members [Max tree depth 11]    | 2       | 407.43         | 10      |



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
| Generate Proof 1 Member [Max tree depth 1]         | 1       | 793.78         | 10      |
| Generate Proof 100 Members [Max tree depth 7]      | 0       | 1374.85        | 10      |
| Generate Proof 500 Members [Max tree depth 9]      | 0       | 1519.06        | 10      |
| Generate Proof 1000 Members [Max tree depth 10]    | 0       | 1556.16        | 10      |
| Generate Proof 2000 Members [Max tree depth 11]    | 0       | 1895.45        | 10      |


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
