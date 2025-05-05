import { Bench, Task } from "tinybench"
import * as V4 from "@semaphore-protocol/core"
import { generateNoirProof, initSemaphoreNoirBackend, SemaphoreNoirBackend } from "@semaphore-protocol/proof"

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

export async function generateBenchmarks() {
  const bench = new Bench()

  const generateMembersV4 = (size: number) => {
    return Array.from(
      { length: size },
      (_, i) => new V4.Identity(i.toString())
    ).map(({ commitment }) => commitment)
  }

  let memberV4: V4.Identity

  let groupV4: V4.Group

  let membersV4: bigint[]

  let backend: SemaphoreNoirBackend


  bench
    .add(
      "Noir - Generate Proof 1 Member",
      async () => {
        await generateNoirProof(memberV4, groupV4, 1, 1, backend)
      },
      {
        beforeAll: async () => {
          groupV4 = new V4.Group([])
          memberV4 = new V4.Identity()
          groupV4.addMember(memberV4.commitment)
          backend = await initSemaphoreNoirBackend(1, undefined, navigator.hardwareConcurrency ?? 1)
        }
      }
    )
    .add(
      "Noir - Generate Proof 100 Members",
      async () => {
        await generateNoirProof(memberV4, groupV4, 1, 1, backend)
      },
      {
        beforeAll: async () => {
          membersV4 = generateMembersV4(100)
          groupV4 = new V4.Group(membersV4)
          const index = Math.floor(membersV4.length / 2)
          memberV4 = new V4.Identity(index.toString())
          backend = await initSemaphoreNoirBackend(7, undefined, navigator.hardwareConcurrency ?? 1)
        }
      }
    )
    .add(
      "Noir - Generate Proof 500 Members",
      async () => {
        await generateNoirProof(memberV4, groupV4, 1, 1, backend)
      },
      {
        beforeAll: async () => {
          membersV4 = generateMembersV4(500)
          groupV4 = new V4.Group(membersV4)
          const index = Math.floor(membersV4.length / 2)
          memberV4 = new V4.Identity(index.toString())
          backend = await initSemaphoreNoirBackend(9, undefined, navigator.hardwareConcurrency ?? 1)
        }
      }
    )
    .add(
      "Noir - Generate Proof 1000 Members",
      async () => {
        await generateNoirProof(memberV4, groupV4, 1, 1, backend)
      },
      {
        beforeAll: async () => {
          membersV4 = generateMembersV4(1000)
          groupV4 = new V4.Group(membersV4)
          const index = Math.floor(membersV4.length / 2)
          memberV4 = new V4.Identity(index.toString())
          backend = await initSemaphoreNoirBackend(10, undefined, navigator.hardwareConcurrency ?? 1)
        }
      }
    )
    .add(
      "Noir - Generate Proof 2000 Members",
      async () => {
        await generateNoirProof(memberV4, groupV4, 1, 1, backend)
      },
      {
        beforeAll: async () => {
          membersV4 = generateMembersV4(2000)
          groupV4 = new V4.Group(membersV4)
          const index = Math.floor(membersV4.length / 2)
          memberV4 = new V4.Identity(index.toString())
          backend = await initSemaphoreNoirBackend(11, undefined, navigator.hardwareConcurrency ?? 1)
        }
      }
    )

  await bench.warmup()
  await bench.run()

  const table = bench.table((task) => generateTable(task))

  return table
}
