exports.up = function(knex, Promise) {
  return knex.schema.createTable('author_book', table => {
    table.integer('author_id').references('id').inTable('author').onDelete('CASCADE').onUpdate('CASCADE')
    table.integer('book_id').references('id').inTable('book').onDelete('CASCADE').onUpdate('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('author_book')
};