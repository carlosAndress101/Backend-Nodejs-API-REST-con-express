const { User, userSchema } = require('./user.model');
const { Products, productSchema } = require('./products.model');
const {Categories, categorieSchema} = require('./categories.model');

function setupModels(sequelize){
    User.init(userSchema, User.config(sequelize));
    Products.init(productSchema, Products.config(sequelize));
    Categories.init(categorieSchema, Categories.config(sequelize));
}

module.exports = { setupModels };