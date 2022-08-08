'use strict';
const { categorieSchema, CATEGORIES_TABLE } = require('../models/categories.model');
const { productSchema, PRODUCTS_TABLE} = require('../models/products.model');
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(CATEGORIES_TABLE, categorieSchema);
    await queryInterface.createTable(PRODUCTS_TABLE, productSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(CATEGORIES_TABLE);
    await queryInterface.dropTable(PRODUCTS_TABLE);
  }
};

