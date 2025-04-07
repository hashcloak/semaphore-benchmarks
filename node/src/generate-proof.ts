import { Bench, Task } from "tinybench"
import { generateNoirProof } from "@semaphore-protocol/proof"
import * as V4 from "@semaphore-protocol/core"
import { CompiledCircuit } from '@noir-lang/noir_js'
import { promises as fs } from 'fs'
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

  const generateMembersV4 = (size: number) => {
    return Array.from(
      { length: size },
      (_, i) => new V4.Identity(i.toString())
    ).map(({ commitment }) => commitment)
  }

  let memberV4: V4.Identity

  let groupV4: V4.Group

  let membersV4: bigint[]

  const outputPath = './compiled_noir_circuit/semaphore-noir-16.json'
  const file = await fs.readFile(outputPath, 'utf-8')
  const compiledCircuit = JSON.parse(file) as CompiledCircuit

  bench
    .add(
      "V4 - Generate Proof 1 Member",
      async () => {
        await generateNoirProof(memberV4, groupV4, 1, 1, 16, compiledCircuit, os.cpus().length)
      },
      {
        beforeAll: () => {
          groupV4 = new V4.Group([])
          memberV4 = new V4.Identity()
          groupV4.addMember(memberV4.commitment)
        }
      }
    )
    .add(
      "V4 - Generate Proof 100 Members",
      async () => {
        await generateNoirProof(memberV4, groupV4, 1, 1, 16, compiledCircuit, os.cpus().length)
      },
      {
        beforeAll: () => {
          membersV4 = generateMembersV4(100)
          groupV4 = new V4.Group(membersV4)
          const index = Math.floor(membersV4.length / 2)
          memberV4 = new V4.Identity(index.toString())
        }
      }
    )
    .add(
      "V4 - Generate Proof 500 Members",
      async () => {
        await generateNoirProof(memberV4, groupV4, 1, 1, 16, compiledCircuit, os.cpus().length)
      },
      {
        beforeAll: () => {
          membersV4 = generateMembersV4(500)
          groupV4 = new V4.Group(membersV4)
          const index = Math.floor(membersV4.length / 2)
          memberV4 = new V4.Identity(index.toString())
        }
      }
    )
    .add(
      "V4 - Generate Proof 1000 Members",
      async () => {
        await generateNoirProof(memberV4, groupV4, 1, 1, 16, compiledCircuit, os.cpus().length)
      },
      {
        beforeAll: () => {
          membersV4 = generateMembersV4(1000)
          groupV4 = new V4.Group(membersV4)
          const index = Math.floor(membersV4.length / 2)
          memberV4 = new V4.Identity(index.toString())
        }
      }
    )
    .add(
      "V4 - Generate Proof 2000 Members",
      async () => {
        await generateNoirProof(memberV4, groupV4, 1, 1, 16, compiledCircuit, os.cpus().length)
      },
      {
        beforeAll: () => {
          membersV4 = generateMembersV4(2000)
          groupV4 = new V4.Group(membersV4)
          const index = Math.floor(membersV4.length / 2)
          memberV4 = new V4.Identity(index.toString())
        }
      }
    )

  await bench.warmup()
  await bench.run()

  const table = bench.table((task) => generateTable(task))

  console.table(table)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
