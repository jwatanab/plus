

exports.up = function (knex, Promise) {
    return knex.schema.hasTable('users').then(function (exists) {
        console.log(exists)
        if (!exists) {
            return knex.schema.createTable('users', function (t) {
                t.increments('id').primary()
                t.string('que', 100)
                t.string('answer')
            })
        } else {
            return new Error("The table already exists")
        }
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.hasTable('users').then(function (exists) {
        console.log(exists)
        if (exists) {
            return knex.schema.dropTable('users')
        }
    })
}
