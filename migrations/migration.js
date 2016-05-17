exports.up = function (knex, Promise) {
  return knex.schema.createTable('movies', function (table) {
    table.increments();
    table.string('DVD_Title');
    table.string('UPC');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('movies');
};
