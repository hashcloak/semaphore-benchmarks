# Benchmarks - NOIR SEMAPHORE

Computer: MacBook Pro
Chip: Intel Core i7 (6-core, 2.6 GHz)
Memory (RAM): 32 GB
Operating System: macOS Ventura version 13.7.4

## Proof generation

┌─────────┬────────────────────────────────────┬─────────┬───────────────────┬─────────┐
│ (index) │              Function              │ ops/sec │ Average Time (ms) │ Samples │
├─────────┼────────────────────────────────────┼─────────┼───────────────────┼─────────┤
│    0    │   'V4 - Generate Proof 1 Member'   │   '0'   │   '5816.07017'    │   10    │
│    1    │ 'V4 - Generate Proof 100 Members'  │   '0'   │   '6556.82484'    │   10    │
│    2    │ 'V4 - Generate Proof 500 Members'  │   '0'   │   '5903.60153'    │   10    │
│    3    │ 'V4 - Generate Proof 1000 Members' │   '0'   │   '5922.14393'    │   10    │
│    4    │ 'V4 - Generate Proof 2000 Members' │   '0'   │   '6011.40565'    │   10    │
└─────────┴────────────────────────────────────┴─────────┴───────────────────┴─────────┘

## Proof verification
```
yarn ts-node src/verify-proof.ts
```

┌─────────┬──────────────────────────────────┬─────────┬───────────────────┬─────────┐
│ (index) │             Function             │ ops/sec │ Average Time (ms) │ Samples │
├─────────┼──────────────────────────────────┼─────────┼───────────────────┼─────────┤
│    0    │   'V4 - Verify Proof 1 Member'   │   '0'   │   '3188.09994'    │   10    │
│    1    │ 'V4 - Verify Proof 100 Members'  │   '0'   │   '3339.89342'    │   10    │
│    2    │ 'V4 - Verify Proof 500 Members'  │   '0'   │   '3472.35484'    │   10    │
│    3    │ 'V4 - Verify Proof 1000 Members' │   '0'   │   '3120.28104'    │   10    │
│    4    │ 'V4 - Verify Proof 2000 Members' │   '0'   │   '3566.91801'    │   10    │
└─────────┴──────────────────────────────────┴─────────┴───────────────────┴─────────┘