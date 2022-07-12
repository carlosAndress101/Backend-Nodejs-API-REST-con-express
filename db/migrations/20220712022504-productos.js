'use strict';
const { productSchema, PRODUCTS_TABLE} = require('../models/products.model');
module.exports = {
  async up (queryInterface, ) {
    await queryInterface.createTable(PRODUCTS_TABLE, productSchema);
  },

  async down (queryInterface, ) {
    await queryInterface.dropTable(PRODUCTS_TABLE);
  }
};
