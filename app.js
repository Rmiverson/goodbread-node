const express = require('express')
const app = express()
const port = 3000

require('./routes/index')(app)

app.use(express.json())

app.listen(port, () => {
    console.log(`Goodbread node api is running on port ${port}`)
})