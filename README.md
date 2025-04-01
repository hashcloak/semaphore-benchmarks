# Semaphore Noir Benchmarks

In `package.json` add the correct path for `"@semaphore-protocol/proof"` which is the local semaphore-noir library. Then run:

```
yarn install
```

Run proof generation/verification:

```
yarn ts-node src/generate-proof.ts
yarn ts-node src/verify-proof.ts
```
