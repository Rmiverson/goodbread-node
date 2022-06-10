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
        id: id
    },
    data: {
        username: params.username,
        email: params.email
    }
})

const deleteUser = (id) => prisma.user.delete({
    where: {
        id: id,
    },
})

const exclude = (user, ...keys) => {
    for (let key of keys) {
        delete user[key]
    }
    return user
}

export {
    findAllUsers,
    findUserById,
    createUser,
    updateUser,
    deleteUser,
    exclude
}