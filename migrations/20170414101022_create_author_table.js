exports.up = function(knex, Promise) {
  return knex.schema.createTable('author', table => {
    table.increments().primary()
    table.string('name').notNullable()
    table.text('bio').notNullable()
    table.string('image_url').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('author')
};
