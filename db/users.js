import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

const findAllUsers = () => prisma.user.findMany()

const findUserById = (userId) => prisma.user.findUnique({
    where: {
        id: userId
    }
})

const createUser = (params) => prisma.user.create({
    data: {
        username: params.username, 
        email: params.email,
        password: params.password
    }
})

const updateUser = (id, params) => prisma.user.updateMany({
    where: {
        id:{
            contains: id
        },
    },
    data: {
        username: params.username,
        email: params.email
    }
})

const deleteUser = (id) => prisma.user.delete({
    where: {
        id: {
            contains: id,
        },
    },
})

export {
    findAllUsers,
    findUserById,
    createUser,
    updateUser,
    deleteUser
}