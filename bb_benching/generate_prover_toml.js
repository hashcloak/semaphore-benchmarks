import fs from "fs"
import { Identity } from "@semaphore-protocol/core"
import { Group } from "@semaphore-protocol/group"

const depth = parseInt(process.argv[2])
const outputPath = process.argv[3]

// Match tree depth settings with the number of members
const memberCounts = {
    1: 1,
    7: 100,
    9: 500,
    10: 1000,
    11: 2000
}
const memberCount = memberCounts[depth]
if (!memberCount) {
    console.error(`Depth ${depth} not supported.`)
    process.exit(1)
}

const identityIndex = Math.floor(memberCount / 2)
const identity = new Identity(identityIndex.toString())

const group = new Group([], depth)
for (let i = 0; i < memberCount; i++) {
    group.addMember(new Identity(i.toString()).commitment)
}

// Ensure the identity is added (in case identityIndex wasn't already in group)
if (group.indexOf(identity.commitment) === -1) {
    group.addMember(identity.commitment)
}

const leafIndex = group.indexOf(identity.commitment)
const proof = group.generateMerkleProof(leafIndex)

// Pad hash path to depth
const hashPath = Array.from({ length: depth }, (_, i) => proof.siblings[i] ?? 0n)
const indexBits = isNaN(proof.index) ? "0x00" : proof.index.toString()

const toml = `
secretKey = "${identity.secretScalar.toString()}"
indexes = "${indexBits}"
hashPath = [${hashPath.map((x) => `"${x}"`).join(", ")}]
merkleProofLength = "${proof.siblings.length}"
merkleTreeRoot = "${group.root}"
hashedScope = "32"
hashedMessage = "43"
`

fs.writeFileSync(outputPath, toml)
console.log(`Prover.toml written for depth ${depth} with ${memberCount} members`)
