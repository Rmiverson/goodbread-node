import {     
    findAllUsers,
    findUserById,
    createUser,
    updateUser,
    deleteUser 
} from '../db/users.js'
import Router from 'express-promise-router'

const router = new Router()

// module.exports = router
export {router}

//get all
router.get('/', async (req, res) => {
    const users = await findAllUsers()
    res.json(users)
})

//get by id
router.get('/:id', async (req, res) => {
    const { id } = req.params
    const user = await findUserById(id)
    res.json(user)
})

//create user
router.post('/', async (req, res) => {
    const user = await createUser(req.query)
    res.json(user)
})

//update user
router.put('/:id', async (req, res) => {
    const { id } = req.params
    const user = await updateUser(id, req.query)
    res.json(user)
})

//delete user
router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const user = await deleteUser(id)
    res.json(user)
})

