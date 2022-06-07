import express, { json } from 'express'
import {router as users} from './routes/users.js'
const app = express()
const port = 3000

app.get('/', (req, resp) => resp.json({ info: 'Goodbread API backend using express and postgresql'}))
app.use('/users', users)
//left off here connecting prisma db queries to routes to app

app.use(json())

app.listen(port, () => {
    console.log(`Goodbread node api is running on port ${port}`)
})