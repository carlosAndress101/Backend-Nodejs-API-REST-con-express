const { User, userSchema } = require('./user.model');
const {Customer, customerSchema} = require('../models/customer.model');
const { Products, productSchema } = require('./products.model');
const {Category, categorieSchema} = require('./categories.model');
const {Order, OrderSchema} = require('./order.model');
const {Order_Product, OrderProductSchema} = require('./order-product.model');

function setupModels(sequelize){
    User.init(userSchema, User.config(sequelize));
    Customer.init(customerSchema, Customer.config(sequelize));
    Products.init(productSchema, Products.config(sequelize));
    Category.init(categorieSchema, Category.config(sequelize));
    Order.init(OrderSchema, Order.config(sequelize));
    Order_Product.init(OrderProductSchema, Order_Product.config(sequelize));

    User.associate(sequelize.models);
    Customer.associate(sequelize.models);
    Category.associate(sequelize.models);
    Products.associate(sequelize.models);
    Order.associate(sequelize.models);
    Order_Product.associate(sequelize.models);
}

module.exports = { setupModels };
