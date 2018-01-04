const express = require('express')
const app = express()
const port = 3000
const knex = require('knex')({
    dialect: 'sqlite3',
    connection: {
        filename: './db/dev.sqlite3'
    },
    useNullAsDefault: true
})
const bookshelf = require('bookshelf')(knex)
const User = bookshelf.Model.extend({
    tableName: 'users'
})

app.listen(port, () => {
    console.log(`listen to ${port}`)
})

app.get('/show', (req, res) => {
    new User().fetchAll().then((collection) => {
        res.json((collection.toArray()[0])._previousAttributes)
    })
})

app.use('/', express.static('./pub'))