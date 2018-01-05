

exports.up = function (knex, Promise) {
    return knex.schema.hasTable('customer').then(function (exists) {
        console.log(exists)
        if (!exists) {
            return knex.schema.createTable('customer', function (t) {
                t.increments('id').primary()
                t.string('que', 100)
                t.string('time')
                t.string('age')
                t.string('remarks')
            })
        } else {
            return new Error("The table already exists")
        }
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.hasTable('customer').then(function (exists) {
        console.log(exists)
        if (exists) {
            return knex.schema.dropTable('customer')
        }
    })
}
