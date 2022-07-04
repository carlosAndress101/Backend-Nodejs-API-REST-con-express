const { Model, DataTypes, Sequelize } = require('sequelize')

const PRODUCTS_TABLE = 'products'

const productSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  price: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  imagen: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
}

class Products extends Model {
    static associate() {
        //associate
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: PRODUCTS_TABLE,
            modelName: 'products',
            timestamps: false,
        }
    }
}

module.exports = { PRODUCTS_TABLE, productSchema, Products};
