# Benchmarks - ORIGINAL

Machine details:
- Computer: MacBook Air
- Chip: Apple M2 (8-core, 3.49 GHz)
- Memory (RAM): 16 GB
- Operating System: macOS Sequoia version 15.3.1

## Proof generation

```
yarn ts-node src/generate-proof.ts 
```

| Function                          | ops/sec | Avg Time (ms) | Samples | Relative to V3     |
|----------------------------------|--------:|---------------:|--------:|--------------------|
| V3 - Generate Proof 1 Member     |       2 |       448.41087 |      10 |                    |
| V4 - Generate Proof 1 Member     |       5 |       190.93650 |      10 | 2.35 x faster      |
| V3 - Generate Proof 100 Members  |       2 |       432.29550 |      10 |                    |
| V4 - Generate Proof 100 Members  |       3 |       290.79910 |      10 | 1.49 x faster      |
| V3 - Generate Proof 500 Members  |       2 |       452.96775 |      10 |                    |
| V4 - Generate Proof 500 Members  |       3 |       312.20201 |      10 | 1.45 x faster      |
| V3 - Generate Proof 1000 Members |       2 |       464.78675 |      10 |                    |
| V4 - Generate Proof 1000 Members |       3 |       319.72415 |      10 | 1.45 x faster      |
| V3 - Generate Proof 2000 Members |       2 |       413.70793 |      10 |                    |
| V4 - Generate Proof 2000 Members |       2 |       399.83894 |      10 | 1.03 x faster      |

<!--
┌─────────┬────────────────────────────────────┬─────────┬───────────────────┬─────────┬─────────────────┐
│ (index) │ Function                           │ ops/sec │ Average Time (ms) │ Samples │ Relative to V3  │
├─────────┼────────────────────────────────────┼─────────┼───────────────────┼─────────┼─────────────────┤
│ 0       │ 'V3 - Generate Proof 1 Member'     │ '2'     │ '448.41087'       │ 10      │ ''              │
│ 1       │ 'V4 - Generate Proof 1 Member'     │ '5'     │ '190.93650'       │ 10      │ '2.35 x faster' │
│ 2       │ 'V3 - Generate Proof 100 Members'  │ '2'     │ '432.29550'       │ 10      │ ''              │
│ 3       │ 'V4 - Generate Proof 100 Members'  │ '3'     │ '290.79910'       │ 10      │ '1.49 x faster' │
│ 4       │ 'V3 - Generate Proof 500 Members'  │ '2'     │ '452.96775'       │ 10      │ ''              │
│ 5       │ 'V4 - Generate Proof 500 Members'  │ '3'     │ '312.20201'       │ 10      │ '1.45 x faster' │
│ 6       │ 'V3 - Generate Proof 1000 Members' │ '2'     │ '464.78675'       │ 10      │ ''              │
│ 7       │ 'V4 - Generate Proof 1000 Members' │ '3'     │ '319.72415'       │ 10      │ '1.45 x faster' │
│ 8       │ 'V3 - Generate Proof 2000 Members' │ '2'     │ '413.70793'       │ 10      │ ''              │
│ 9       │ 'V4 - Generate Proof 2000 Members' │ '2'     │ '399.83894'       │ 10      │ '1.03 x faster' │
└─────────┴────────────────────────────────────┴─────────┴───────────────────┴─────────┴─────────────────┘
-->

## Proof verification

```
yarn ts-node src/verify-proof.ts 
```

| Function                         | ops/sec | Avg Time (ms) | Samples | Relative to V3     |
|---------------------------------|--------:|---------------:|--------:|--------------------|
| V3 - Verify Proof 1 Member      |     116 |        8.61088 |      59 |                    |
| V4 - Verify Proof 1 Member      |     115 |        8.62182 |      59 | 1.00 x slower      |
| V3 - Verify Proof 100 Members   |     116 |        8.61891 |      59 |                    |
| V4 - Verify Proof 100 Members   |     116 |        8.56244 |      59 | 1.01 x faster      |
| V3 - Verify Proof 500 Members   |     116 |        8.61508 |      59 |                    |
| V4 - Verify Proof 500 Members   |     114 |        8.69773 |      58 | 1.01 x slower      |
| V3 - Verify Proof 1000 Members  |     107 |        9.32243 |      54 |                    |
| V4 - Verify Proof 1000 Members  |     115 |        8.64480 |      58 | 1.08 x faster      |
| V3 - Verify Proof 2000 Members  |     115 |        8.65079 |      58 |                    |
| V4 - Verify Proof 2000 Members  |     115 |        8.65773 |      58 | 1.00 x slower      |

<!--
┌─────────┬──────────────────────────────────┬─────────┬───────────────────┬─────────┬─────────────────┐
│ (index) │ Function                         │ ops/sec │ Average Time (ms) │ Samples │ Relative to V3  │
├─────────┼──────────────────────────────────┼─────────┼───────────────────┼─────────┼─────────────────┤
│ 0       │ 'V3 - Verify Proof 1 Member'     │ '116'   │ '8.61088'         │ 59      │ ''              │
│ 1       │ 'V4 - Verify Proof 1 Member'     │ '115'   │ '8.62182'         │ 59      │ '1.00 x slower' │
│ 2       │ 'V3 - Verify Proof 100 Members'  │ '116'   │ '8.61891'         │ 59      │ ''              │
│ 3       │ 'V4 - Verify Proof 100 Members'  │ '116'   │ '8.56244'         │ 59      │ '1.01 x faster' │
│ 4       │ 'V3 - Verify Proof 500 Members'  │ '116'   │ '8.61508'         │ 59      │ ''              │
│ 5       │ 'V4 - Verify Proof 500 Members'  │ '114'   │ '8.69773'         │ 58      │ '1.01 x slower' │
│ 6       │ 'V3 - Verify Proof 1000 Members' │ '107'   │ '9.32243'         │ 54      │ ''              │
│ 7       │ 'V4 - Verify Proof 1000 Members' │ '115'   │ '8.64480'         │ 58      │ '1.08 x faster' │
│ 8       │ 'V3 - Verify Proof 2000 Members' │ '115'   │ '8.65079'         │ 58      │ ''              │
│ 9       │ 'V4 - Verify Proof 2000 Members' │ '115'   │ '8.65773'         │ 58      │ '1.00 x slower' │
└─────────┴──────────────────────────────────┴─────────┴───────────────────┴─────────┴─────────────────┘
-->

## Other

```
yarn ts-node src/add-member.ts
```

| Function                         | ops/sec | Avg Time (ms) | Samples | Relative to V3     |
|----------------------------------|--------:|---------------:|--------:|--------------------|
| V3 - Add Member Empty Group      |     461 |         2.16547 |      231 |                  |
| V4 - Add Member Empty Group      |    1579 |         0.63294 |      791 | 3.42 x faster    |
| V3 - Add Member 100 Members      |     460 |         2.16925 |      231 |                  |
| V4 - Add Member 100 Members      |    1513 |         0.66082 |      757 | 3.28 x faster    |
| V3 - Add Member 500 Members      |     463 |         2.15626 |      232 |                  |
| V4 - Add Member 500 Members      |    1305 |         0.76593 |      653 | 2.82 x faster    |
| V3 - Add Member 1000 Members     |     440 |         2.26839 |      221 |                  |
| V4 - Add Member 1000 Members     |    1321 |         0.75689 |      662 | 3.00 x faster    |
| V3 - Add Member 2000 Members     |     461 |         2.16745 |      231 |                  |
| V4 - Add Member 2000 Members     |    1308 |         0.76416 |      655 | 2.84 x faster    |

<!--
┌─────────┬────────────────────────────────┬─────────┬───────────────────┬─────────┬─────────────────┐
│ (index) │ Function                       │ ops/sec │ Average Time (ms) │ Samples │ Relative to V3  │
├─────────┼────────────────────────────────┼─────────┼───────────────────┼─────────┼─────────────────┤
│ 0       │ 'V3 - Add Member Empty Group'  │ '461'   │ '2.16547'         │ 231     │ ''              │
│ 1       │ 'V4 - Add Member Empty Group'  │ '1,579' │ '0.63294'         │ 791     │ '3.42 x faster' │
│ 2       │ 'V3 - Add Member 100 Members'  │ '460'   │ '2.16925'         │ 231     │ ''              │
│ 3       │ 'V4 - Add Member 100 Members'  │ '1,513' │ '0.66082'         │ 757     │ '3.28 x faster' │
│ 4       │ 'V3 - Add Member 500 Members'  │ '463'   │ '2.15626'         │ 232     │ ''              │
│ 5       │ 'V4 - Add Member 500 Members'  │ '1,305' │ '0.76593'         │ 653     │ '2.82 x faster' │
│ 6       │ 'V3 - Add Member 1000 Members' │ '440'   │ '2.26839'         │ 221     │ ''              │
│ 7       │ 'V4 - Add Member 1000 Members' │ '1,321' │ '0.75689'         │ 662     │ '3.00 x faster' │
│ 8       │ 'V3 - Add Member 2000 Members' │ '461'   │ '2.16745'         │ 231     │ ''              │
│ 9       │ 'V4 - Add Member 2000 Members' │ '1,308' │ '0.76416'         │ 655     │ '2.84 x faster' │
└─────────┴────────────────────────────────┴─────────┴───────────────────┴─────────┴─────────────────┘
-->

```
yarn ts-node src/create-group.ts 
```

| Function                         | ops/sec   | Avg Time (ms) | Samples | Relative to V3       |
|----------------------------------|-----------:|---------------:|--------:|-----------------------|
| V3 - Create Empty Group          |        455 |        2.19640 |     228 |                       |
| V4 - Create Empty Group          | 10,841,234 |        0.00009 | 5420989 | 23811.74 x faster     |
| V3 - Create Group 100 Members    |         59 |       16.92100 |      30 |                       |
| V4 - Create Group 100 Members    |         75 |       13.31082 |      38 | 1.27 x faster         |
| V3 - Create Group 500 Members    |         14 |       70.31049 |      10 |                       |
| V4 - Create Group 500 Members    |         14 |       67.31331 |      10 | 1.04 x faster         |
| V3 - Create Group 1000 Members   |          7 |      138.28628 |      10 |                       |
| V4 - Create Group 1000 Members   |          7 |      135.86375 |      10 | 1.02 x faster         |
| V3 - Create Group 2000 Members   |          3 |      276.94147 |      10 |                       |
| V4 - Create Group 2000 Members   |          3 |      269.16533 |      10 | 1.03 x faster         |

<!--
┌─────────┬──────────────────────────────────┬──────────────┬───────────────────┬─────────┬─────────────────────┐
│ (index) │ Function                         │ ops/sec      │ Average Time (ms) │ Samples │ Relative to V3      │
├─────────┼──────────────────────────────────┼──────────────┼───────────────────┼─────────┼─────────────────────┤
│ 0       │ 'V3 - Create Empty Group'        │ '455'        │ '2.19640'         │ 228     │ ''                  │
│ 1       │ 'V4 - Create Empty Group'        │ '10,841,234' │ '0.00009'         │ 5420989 │ '23811.74 x faster' │
│ 2       │ 'V3 - Create Group 100 Members'  │ '59'         │ '16.92100'        │ 30      │ ''                  │
│ 3       │ 'V4 - Create Group 100 Members'  │ '75'         │ '13.31082'        │ 38      │ '1.27 x faster'     │
│ 4       │ 'V3 - Create Group 500 Members'  │ '14'         │ '70.31049'        │ 10      │ ''                  │
│ 5       │ 'V4 - Create Group 500 Members'  │ '14'         │ '67.31331'        │ 10      │ '1.04 x faster'     │
│ 6       │ 'V3 - Create Group 1000 Members' │ '7'          │ '138.28628'       │ 10      │ ''                  │
│ 7       │ 'V4 - Create Group 1000 Members' │ '7'          │ '135.86375'       │ 10      │ '1.02 x faster'     │
│ 8       │ 'V3 - Create Group 2000 Members' │ '3'          │ '276.94147'       │ 10      │ ''                  │
│ 9       │ 'V4 - Create Group 2000 Members' │ '3'          │ '269.16533'       │ 10      │ '1.03 x faster'     │
└─────────┴──────────────────────────────────┴──────────────┴───────────────────┴─────────┴─────────────────────┘
-->