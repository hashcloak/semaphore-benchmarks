# Benchmarks - ORIGINAL

Machine details:
- Computer: MacBook Pro
- Chip: Intel Core i7 (6-core, 2.6 GHz)
- Memory (RAM): 32 GB
- Operating System: macOS Ventura version 13.7.4

## Proof generation

```
yarn ts-node src/generate-proof.ts 
```

| Function                          | ops/sec | Avg Time (ms) | Samples | Relative to V3     |
|----------------------------------|--------:|---------------:|--------:|--------------------|
| V3 - Generate Proof 1 Member     |       1 |       540.1228 |      10 |                    |
| V4 - Generate Proof 1 Member     |       3 |       322.9823 |      10 | 1.67 x faster      |
| V3 - Generate Proof 100 Members  |       1 |       656.0557 |      10 |                    |
| V4 - Generate Proof 100 Members  |       2 |       401.4585 |      10 | 1.63 x faster      |
| V3 - Generate Proof 500 Members  |       1 |       640.8070 |      10 |                    |
| V4 - Generate Proof 500 Members  |       2 |       498.7932 |      10 | 1.28 x faster      |
| V3 - Generate Proof 1000 Members |       1 |       780.5768 |      10 |                    |
| V4 - Generate Proof 1000 Members |       2 |       467.5323 |      10 | 1.67 x faster      |
| V3 - Generate Proof 2000 Members |       1 |       711.5874 |      10 |                    |
| V4 - Generate Proof 2000 Members |       1 |       544.4738 |      10 | 1.31 x faster      |

<!--
┌─────────┬────────────────────────────────────┬─────────┬───────────────────┬─────────┬─────────────────┐
│ (index) │              Function              │ ops/sec │ Average Time (ms) │ Samples │ Relative to V3  │
├─────────┼────────────────────────────────────┼─────────┼───────────────────┼─────────┼─────────────────┤
│    0    │   'V3 - Generate Proof 1 Member'   │   '1'   │    '540.12279'    │   10    │       ''        │
│    1    │   'V4 - Generate Proof 1 Member'   │   '3'   │    '322.98226'    │   10    │ '1.67 x faster' │
│    2    │ 'V3 - Generate Proof 100 Members'  │   '1'   │    '656.05569'    │   10    │       ''        │
│    3    │ 'V4 - Generate Proof 100 Members'  │   '2'   │    '401.45850'    │   10    │ '1.63 x faster' │
│    4    │ 'V3 - Generate Proof 500 Members'  │   '1'   │    '640.80699'    │   10    │       ''        │
│    5    │ 'V4 - Generate Proof 500 Members'  │   '2'   │    '498.79321'    │   10    │ '1.28 x faster' │
│    6    │ 'V3 - Generate Proof 1000 Members' │   '1'   │    '780.57678'    │   10    │       ''        │
│    7    │ 'V4 - Generate Proof 1000 Members' │   '2'   │    '467.53226'    │   10    │ '1.67 x faster' │
│    8    │ 'V3 - Generate Proof 2000 Members' │   '1'   │    '711.58740'    │   10    │       ''        │
│    9    │ 'V4 - Generate Proof 2000 Members' │   '1'   │    '544.47381'    │   10    │ '1.31 x faster' │
└─────────┴────────────────────────────────────┴─────────┴───────────────────┴─────────┴─────────────────┘
-->

## Proof verification

```
yarn ts-node src/verify-proof.ts 
```

| Function                         | ops/sec | Avg Time (ms) | Samples | Relative to V3     |
|---------------------------------|--------:|---------------:|--------:|--------------------|
| V3 - Verify Proof 1 Member      |      92 |        10.8060 |      47 |                    |
| V4 - Verify Proof 1 Member      |      80 |        12.4900 |      41 | 1.16 x slower      |
| V3 - Verify Proof 100 Members   |      83 |        11.9462 |      42 |                    |
| V4 - Verify Proof 100 Members   |      49 |        20.0234 |      25 | 1.68 x slower      |
| V3 - Verify Proof 500 Members   |      90 |        11.0145 |      46 |                    |
| V4 - Verify Proof 500 Members   |      73 |        13.5178 |      37 | 1.23 x slower      |
| V3 - Verify Proof 1000 Members  |      92 |        10.8127 |      47 |                    |
| V4 - Verify Proof 1000 Members  |      81 |        12.2210 |      41 | 1.13 x slower      |
| V3 - Verify Proof 2000 Members  |      81 |        12.2325 |      41 |                    |
| V4 - Verify Proof 2000 Members  |      98 |        10.1626 |      50 | 1.20 x faster      |

<!--
┌─────────┬──────────────────────────────────┬─────────┬───────────────────┬─────────┬─────────────────┐
│ (index) │             Function             │ ops/sec │ Average Time (ms) │ Samples │ Relative to V3  │
├─────────┼──────────────────────────────────┼─────────┼───────────────────┼─────────┼─────────────────┤
│    0    │   'V3 - Verify Proof 1 Member'   │  '92'   │    '10.80604'     │   47    │       ''        │
│    1    │   'V4 - Verify Proof 1 Member'   │  '80'   │    '12.48997'     │   41    │ '1.16 x slower' │
│    2    │ 'V3 - Verify Proof 100 Members'  │  '83'   │    '11.94617'     │   42    │       ''        │
│    3    │ 'V4 - Verify Proof 100 Members'  │  '49'   │    '20.02338'     │   25    │ '1.68 x slower' │
│    4    │ 'V3 - Verify Proof 500 Members'  │  '90'   │    '11.01452'     │   46    │       ''        │
│    5    │ 'V4 - Verify Proof 500 Members'  │  '73'   │    '13.51778'     │   37    │ '1.23 x slower' │
│    6    │ 'V3 - Verify Proof 1000 Members' │  '92'   │    '10.81268'     │   47    │       ''        │
│    7    │ 'V4 - Verify Proof 1000 Members' │  '81'   │    '12.22099'     │   41    │ '1.13 x slower' │
│    8    │ 'V3 - Verify Proof 2000 Members' │  '81'   │    '12.23245'     │   41    │       ''        │
│    9    │ 'V4 - Verify Proof 2000 Members' │  '98'   │    '10.16256'     │   50    │ '1.20 x faster' │
└─────────┴──────────────────────────────────┴─────────┴───────────────────┴─────────┴─────────────────┘
-->

## Other

```
yarn ts-node src/add-member.ts
```

| Function                         | ops/sec | Avg Time (ms) | Samples | Relative to V3     |
|----------------------------------|--------:|---------------:|--------:|--------------------|
| V3 - Add Member Empty Group      |     154 |         6.4697 |      78 |                    |
| V4 - Add Member Empty Group      |     601 |         1.6621 |     301 | 3.89 x faster      |
| V3 - Add Member 100 Members      |     116 |         8.5764 |      59 |                    |
| V4 - Add Member 100 Members      |     535 |         1.8673 |     268 | 4.59 x faster      |
| V3 - Add Member 500 Members      |     164 |         6.0644 |      83 |                    |
| V4 - Add Member 500 Members      |     601 |         1.6635 |     301 | 3.65 x faster      |
| V3 - Add Member 1000 Members     |     199 |         5.0084 |     100 |                    |
| V4 - Add Member 1000 Members     |     630 |         1.5856 |     316 | 3.16 x faster      |
| V3 - Add Member 2000 Members     |     177 |         5.6358 |      89 |                    |
| V4 - Add Member 2000 Members     |     573 |         1.7442 |     287 | 3.23 x faster      |

<!--
┌─────────┬────────────────────────────────┬─────────┬───────────────────┬─────────┬─────────────────┐
│ (index) │            Function            │ ops/sec │ Average Time (ms) │ Samples │ Relative to V3  │
├─────────┼────────────────────────────────┼─────────┼───────────────────┼─────────┼─────────────────┤
│    0    │ 'V3 - Add Member Empty Group'  │  '154'  │     '6.46973'     │   78    │       ''        │
│    1    │ 'V4 - Add Member Empty Group'  │  '601'  │     '1.66210'     │   301   │ '3.89 x faster' │
│    2    │ 'V3 - Add Member 100 Members'  │  '116'  │     '8.57643'     │   59    │       ''        │
│    3    │ 'V4 - Add Member 100 Members'  │  '535'  │     '1.86725'     │   268   │ '4.59 x faster' │
│    4    │ 'V3 - Add Member 500 Members'  │  '164'  │     '6.06439'     │   83    │       ''        │
│    5    │ 'V4 - Add Member 500 Members'  │  '601'  │     '1.66349'     │   301   │ '3.65 x faster' │
│    6    │ 'V3 - Add Member 1000 Members' │  '199'  │     '5.00836'     │   100   │       ''        │
│    7    │ 'V4 - Add Member 1000 Members' │  '630'  │     '1.58565'     │   316   │ '3.16 x faster' │
│    8    │ 'V3 - Add Member 2000 Members' │  '177'  │     '5.63575'     │   89    │       ''        │
│    9    │ 'V4 - Add Member 2000 Members' │  '573'  │     '1.74424'     │   287   │ '3.23 x faster' │
└─────────┴────────────────────────────────┴─────────┴───────────────────┴─────────┴─────────────────┘
-->

```
yarn ts-node src/create-group.ts 
```

| Function                         | ops/sec   | Avg Time (ms) | Samples | Relative to V3       |
|----------------------------------|-----------:|---------------:|--------:|-----------------------|
| V3 - Create Empty Group          |        193 |        5.1590  |      97 |                       |
| V4 - Create Empty Group          | 3,882,300  |        0.00026 | 1,941,151 | 20028.68 x faster    |
| V3 - Create Group 100 Members    |         24 |       41.1452  |      13 |                       |
| V4 - Create Group 100 Members    |         31 |       31.9979  |      16 | 1.29 x faster         |
| V3 - Create Group 500 Members    |          5 |      176.6400  |      10 |                       |
| V4 - Create Group 500 Members    |          5 |      169.6874  |      10 | 1.04 x faster         |
| V3 - Create Group 1000 Members   |          2 |      337.8884  |      10 |                       |
| V4 - Create Group 1000 Members   |          3 |      318.8077  |      10 | 1.06 x faster         |
| V3 - Create Group 2000 Members   |          1 |      716.7550  |      10 |                       |
| V4 - Create Group 2000 Members   |          1 |      724.5725  |      10 | 1.01 x slower         |

<!--
┌─────────┬──────────────────────────────────┬─────────────┬───────────────────┬─────────┬─────────────────────┐
│ (index) │             Function             │   ops/sec   │ Average Time (ms) │ Samples │   Relative to V3    │
├─────────┼──────────────────────────────────┼─────────────┼───────────────────┼─────────┼─────────────────────┤
│    0    │    'V3 - Create Empty Group'     │    '193'    │     '5.15897'     │   97    │         ''          │
│    1    │    'V4 - Create Empty Group'     │ '3,882,300' │     '0.00026'     │ 1941151 │ '20028.68 x faster' │
│    2    │ 'V3 - Create Group 100 Members'  │    '24'     │    '41.14524'     │   13    │         ''          │
│    3    │ 'V4 - Create Group 100 Members'  │    '31'     │    '31.99793'     │   16    │   '1.29 x faster'   │
│    4    │ 'V3 - Create Group 500 Members'  │     '5'     │    '176.64001'    │   10    │         ''          │
│    5    │ 'V4 - Create Group 500 Members'  │     '5'     │    '169.68743'    │   10    │   '1.04 x faster'   │
│    6    │ 'V3 - Create Group 1000 Members' │     '2'     │    '337.88835'    │   10    │         ''          │
│    7    │ 'V4 - Create Group 1000 Members' │     '3'     │    '318.80769'    │   10    │   '1.06 x faster'   │
│    8    │ 'V3 - Create Group 2000 Members' │     '1'     │    '716.75496'    │   10    │         ''          │
│    9    │ 'V4 - Create Group 2000 Members' │     '1'     │    '724.57247'    │   10    │   '1.01 x slower'   │
└─────────┴──────────────────────────────────┴─────────────┴───────────────────┴─────────┴─────────────────────┘
-->