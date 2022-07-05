const { User, userSchema } = require('./user.model');
const { Products, productSchema } = require('./products.model');
const {Categories, categorieSchema} = require('./categories.model');
const {Customer, customerSchema} = require('../models/customer.model');

function setupModels(sequelize){
    User.init(userSchema, User.config(sequelize));
    Products.init(productSchema, Products.config(sequelize));
    Categories.init(categorieSchema, Categories.config(sequelize));
    Customer.init(customerSchema, Customer.config(sequelize));

    Customer.associate(sequelize.models);
    User.associate(sequelize.models);
}

module.exports = { setupModels };
