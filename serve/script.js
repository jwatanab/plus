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
const Customer = bookshelf.Model.extend({
    tableName: 'customer'
})

app.listen(port, () => {
    console.log(`listen to ${port}`)
})

app.get('/show', (req, res) => {
    new Customer().fetchAll().then((collection) => {
        res.json(collection.toArray())
    })
})

app.get('/insert', (req, res) => {
    console.log(req.query)
    // new Customer(req.body).save().then((modal) => { })
})

app.use('/', express.static('./pub'))