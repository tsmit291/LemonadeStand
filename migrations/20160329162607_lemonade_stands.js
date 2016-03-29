exports.up = function(knex, Promise) {
  return knex.schema.createTable('lemonade', function(table){
    table.increments();
    table.string('stand_name');
    table.string('owner_firstname');
    table.string('owner_lastname');
    table.string('neighborhoood_id');
    table.integer('rating');
    table.text('address');
    table.string('image');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('lemonade');
};
