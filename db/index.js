import { PrismaClient } from '@prisma/client'
import { allUsers } from './users'

const prisma = new PrismaClient()

async function main() {
    console.log(allUsers)
}

main()
.catch((error) => {
    throw error
})
.finally(async () => {
    await prisma.$disconnect()
})