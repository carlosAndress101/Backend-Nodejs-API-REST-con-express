'use strict';
const { userSchema, USER_TABLE } = require('../models/user.model');
module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(USER_TABLE, 'role', userSchema.role);
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(USER_TABLE, 'role');

  }
};
