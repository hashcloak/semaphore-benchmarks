import { Bench, Task } from "tinybench"
import { generateNoirProof, initSemaphoreNoirBackend } from "@semaphore-protocol/proof"
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

    const generateMembersV4 = (size: number) => {
        return Array.from(
            { length: size },
            (_, i) => new V4.Identity(i.toString())
        ).map(({ commitment }) => commitment)
    }

    let memberV4: V4.Identity

    let groupV4: V4.Group

    let membersV4: bigint[]

    bench
        .add(
            "Initialize Backend Tree Depth 1",
            async () => {
                await initSemaphoreNoirBackend(1)
            },
        )
        .add(
            "Initialize Backend Tree Depth 10",
            async () => {
                await initSemaphoreNoirBackend(10)
            },
        )
        .add(
            "Initialize Backend Tree Depth 20",
            async () => {
                await initSemaphoreNoirBackend(20)
            },

        )
        .add(
            "Initialize Backend Tree Depth 32",
            async () => {
                await initSemaphoreNoirBackend(32)
            },
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
