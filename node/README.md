# node

In `package.json` add the correct path for `"@semaphore-protocol/proof"` and `"@semaphore-protocol/noir-proof-batch"` which is the local semaphore-noir library. Then run:

```
yarn install
```

Run benchmarks:

```
yarn ts-node src/generate-proof.ts
yarn ts-node src/verify-proof.ts
yarn ts-node src/init-backend.ts
yarn ts-node src/batching.ts
```