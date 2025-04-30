import { Bench, Task } from "tinybench"
import {
  generateNoirProof,
  verifyNoirProof,
  SemaphoreNoirProof,
  SemaphoreNoirBackend,
  initSemaphoreNoirBackend
} from "@semaphore-protocol/proof"
import * as V4 from "@semaphore-protocol/core"
import os from "os"

const generateTable = (task: Task) => {
  if (task && task.name && task.result) {
    return {
      Function: task.name,
      "ops/sec": task.result.error
        ? "NaN"
        : parseInt(task.result.hz.toString(), 10).toLocaleString(),
      "Average Time (ms)": task.result.error
        ? "NaN"
        : task.result.mean.toFixed(5),
      Samples: task.result.error ? "NaN" : task.result.samples.length
    }
  }
}

async function main() {

  const bench = new Bench()
  const bench2 = new Bench()

  const generateMembersV4 = (size: number) => {
    return Array.from(
      { length: size },
      (_, i) => new V4.Identity(i.toString())
    ).map(({ commitment }) => commitment)
  }

  let memberV4: V4.Identity

  let groupV4: V4.Group

  let membersV4: bigint[]

  let proofV4: SemaphoreNoirProof

  let backend: SemaphoreNoirBackend

  // verifies proofs with backend pre-initialized
  bench
    .add(
      "Verify Proof 1 Member (Backend Pre-initialized) [Max tree depth 1]",
      async () => {
        await verifyNoirProof(proofV4, backend)
      },
      {
        beforeAll: async () => {
          groupV4 = new V4.Group([])
          memberV4 = new V4.Identity()
          groupV4.addMember(memberV4.commitment)
          backend = await initSemaphoreNoirBackend(1)
          proofV4 = await generateNoirProof(memberV4, groupV4, 1, 1, backend)
        }
      }
    )
    .add(
      "Verify Proof 100 Members (Backend Pre-initialized) [Max tree depth 7]",
      async () => {
        await verifyNoirProof(proofV4, backend)
      },
      {
        beforeAll: async () => {
          membersV4 = generateMembersV4(100)
          groupV4 = new V4.Group(membersV4)
          const index = Math.floor(membersV4.length / 2)
          memberV4 = new V4.Identity(index.toString())
          backend = await initSemaphoreNoirBackend(7)
          proofV4 = await generateNoirProof(memberV4, groupV4, 1, 1, backend)
        }
      }
    )
    .add(
      "Verify Proof 500 Members (Backend Pre-initialized) [Max tree depth 9]",
      async () => {
        await verifyNoirProof(proofV4, backend)
      },
      {
        beforeAll: async () => {
          membersV4 = generateMembersV4(500)
          groupV4 = new V4.Group(membersV4)
          const index = Math.floor(membersV4.length / 2)
          memberV4 = new V4.Identity(index.toString())
          backend = await initSemaphoreNoirBackend(9)
          proofV4 = await generateNoirProof(memberV4, groupV4, 1, 1, backend)
        }
      }
    )
    .add(
      "Verify Proof 1000 Members (Backend Pre-initialized) [Max tree depth 10]",
      async () => {
        await verifyNoirProof(proofV4, backend)
      },
      {
        beforeAll: async () => {
          membersV4 = generateMembersV4(1000)
          groupV4 = new V4.Group(membersV4)
          const index = Math.floor(membersV4.length / 2)
          memberV4 = new V4.Identity(index.toString())
          backend = await initSemaphoreNoirBackend(10)
          proofV4 = await generateNoirProof(memberV4, groupV4, 1, 1, backend)
        }
      }
    )
    .add(
      "Verify Proof 2000 Members (Backend Pre-initialized) [Max tree depth 11]",
      async () => {
        await verifyNoirProof(proofV4, backend)
      },
      {
        beforeAll: async () => {
          membersV4 = generateMembersV4(2000)
          groupV4 = new V4.Group(membersV4)
          const index = Math.floor(membersV4.length / 2)
          memberV4 = new V4.Identity(index.toString())
          backend = await initSemaphoreNoirBackend(11)
          proofV4 = await generateNoirProof(memberV4, groupV4, 1, 1, backend)
        }
      }
    )

  await bench.warmup()
  await bench.run()

  // initialize backend + verifies proofs
  bench2
    .add(
      "Verify Proof 1 Member + initializ backend [Max tree depth 1]",
      async () => {
        backend = await initSemaphoreNoirBackend(1)
        await verifyNoirProof(proofV4, backend)
      },
      {
        beforeAll: async () => {
          groupV4 = new V4.Group([])
          memberV4 = new V4.Identity()
          groupV4.addMember(memberV4.commitment)
          backend = await initSemaphoreNoirBackend(1)
          proofV4 = await generateNoirProof(memberV4, groupV4, 1, 1, backend)
        }
      }
    )
    .add(
      "Verify Proof 100 Members + initializ backend [Max tree depth 7]",
      async () => {
        backend = await initSemaphoreNoirBackend(7)
        await verifyNoirProof(proofV4, backend)
      },
      {
        beforeAll: async () => {
          membersV4 = generateMembersV4(100)
          groupV4 = new V4.Group(membersV4)
          const index = Math.floor(membersV4.length / 2)
          memberV4 = new V4.Identity(index.toString())
          backend = await initSemaphoreNoirBackend(7)
          proofV4 = await generateNoirProof(memberV4, groupV4, 1, 1, backend)
        }
      }
    )
    .add(
      "Verify Proof 500 Members + initializ backend [Max tree depth 9]",
      async () => {
        backend = await initSemaphoreNoirBackend(9)
        await verifyNoirProof(proofV4, backend)
      },
      {
        beforeAll: async () => {
          membersV4 = generateMembersV4(500)
          groupV4 = new V4.Group(membersV4)
          const index = Math.floor(membersV4.length / 2)
          memberV4 = new V4.Identity(index.toString())
          backend = await initSemaphoreNoirBackend(9)
          proofV4 = await generateNoirProof(memberV4, groupV4, 1, 1, backend)
        }
      }
    )
    .add(
      "Verify Proof 1000 Members + initializ backend [Max tree depth 10]",
      async () => {
        backend = await initSemaphoreNoirBackend(10)
        await verifyNoirProof(proofV4, backend)
      },
      {
        beforeAll: async () => {
          membersV4 = generateMembersV4(1000)
          groupV4 = new V4.Group(membersV4)
          const index = Math.floor(membersV4.length / 2)
          memberV4 = new V4.Identity(index.toString())
          backend = await initSemaphoreNoirBackend(10)
          proofV4 = await generateNoirProof(memberV4, groupV4, 1, 1, backend)
        }
      }
    )
    .add(
      "Verify Proof 2000 Members + initializ backend [Max tree depth 11]",
      async () => {
        backend = await initSemaphoreNoirBackend(11)
        await verifyNoirProof(proofV4, backend)
      },
      {
        beforeAll: async () => {
          membersV4 = generateMembersV4(2000)
          groupV4 = new V4.Group(membersV4)
          const index = Math.floor(membersV4.length / 2)
          memberV4 = new V4.Identity(index.toString())
          backend = await initSemaphoreNoirBackend(11)
          proofV4 = await generateNoirProof(memberV4, groupV4, 1, 1, backend)
        }
      }
    )

  await bench2.warmup()
  await bench2.run()

  const table = bench.table((task) => generateTable(task))
  const table2 = bench2.table((task) => generateTable(task))

  console.table(table)
  console.table(table2)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
