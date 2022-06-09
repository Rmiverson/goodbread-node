import {     
    findAllUsers,
    findUserById,
    createUser,
    updateUser,
    deleteUser,
    exclude 
} from '../db/users.js'
import Router from 'express-promise-router'

const router = new Router()

//get all
router.get('/', async (req, res) => {
    const users = await findAllUsers()
    res.status(200).json(users)
})

//get by id
router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    const user = await findUserById(id)
    res.status(200).json(user)
})

//create user
router.post('/', async (req, res) => {
    const user = await createUser(req.query)
    res.status(200).json({message: `Created user with id of: ${user.id}`})
})

//update user
router.put('/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    const user = await updateUser(id, req.query)
    res.status(200).json({message: `Updated user with id of: ${id}`})
})

//delete user
router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    const user = await deleteUser(id)
    res.status(200).send({message: `Deleted user with id of: ${user.id}`})
})

export {router}