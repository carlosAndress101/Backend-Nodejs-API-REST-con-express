const { Model, DataTypes, Sequelize } = require('sequelize');
const { CATEGORIES_TABLE } = require('../models/categories.model');

const PRODUCTS_TABLE = 'products';

const productSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  categoriesId: {
    field: 'category_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references:{
      model: CATEGORIES_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete:'SET NULL',
  }
};

class Products extends Model {
  static associate() {
    this.belongsTo(Model.categories, { as: 'categories' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCTS_TABLE,
      modelName: 'products',
      timestamps: false,
    };
  }
}

module.exports = { PRODUCTS_TABLE, productSchema, Products };
