const Router = require('express-promise-router')
const db = require('../db')

const router = new Router()

module.exports = router

//get all
router.get('/', async (req, res) => {
    const { rows } = await db.query('SELECT * FROM users ORDER BY id ASC')
    res.send(rows)
})

//get by id
router.get('/:id', async (req, res) => {
    const { id } = req.params
    const { rows } = await db.query('SELECT * FROM users WHERE id = $1', [id])
    res.send(rows[0])
})

//create user
router.post('/', async (req, res) => {
    const { username, email } = req.query
    await db.query('INSERT INTO users (name, email) VALUES ($1, $2)', [username, email])
    res.send(`User added`)
})

//update user
router.put('/:id', async (req, res) => {
    const { id } = req.params
    const { username, email } = req.query
    await db.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [username, email, id])
    res.send(`User modified with ID: ${id}`)
})

//delete user
router.delete('/:id', async (req, res) => {
    const { id } = req.params
    console.log(req)
    await db.query('DELETE FROM users WHERE ID = $1', [id])
    res.send(`User deleted with ID: ${id}`)
})