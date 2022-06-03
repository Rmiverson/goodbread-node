const users = require('./users')

module.exports = app => {
    app.get('/', (req, resp) => resp.json({ info: 'Goodbread API backend using express and postgresql'}))
    app.use('/users', users)
}