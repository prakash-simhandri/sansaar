exports.up = async (knex) => {
  // await knex.schema.alterTable('main.course_categories', (table) => {
  //   table.increments().primary();
  //   table.integer('course_id').unsigned().references('id').inTable('main.courses').notNullable();
  //   table.integer('category_id').unsigned().references('id').inTable('main.category').notNullable();
  //   table.datetime('created_at').notNullable();
  // });
};

exports.down = async (knex) => {};
