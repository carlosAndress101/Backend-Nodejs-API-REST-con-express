'use strict';
const {categorieSchema, CATEGORIES_TABLE} = require('../models/categories.model');
module.exports = {
  async up (queryInterface, ) {
    await queryInterface.createTable(CATEGORIES_TABLE, categorieSchema);
  },

  async down (queryInterface, ) {
    await queryInterface.dropTable(CATEGORIES_TABLE);
  }
};

