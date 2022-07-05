'use strict';
const { customerSchema, CUSTOMER_TABLE} = require('../models/customer.model');
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CUSTOMER_TABLE, customerSchema);
  },

  async down (queryInterface) {
    await queryInterface.drop(CUSTOMER_TABLE);
  }
};
