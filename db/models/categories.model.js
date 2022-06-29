const { Model, DataTypes, Sequelize } = require('sequelize');

const CATEGORIES_TABLE = 'categories';

const categorieSchema = {
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

class Categories extends Model {
    static associate() {
        //associate
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: CATEGORIES_TABLE,
            modelName: 'Categories',
            timestamps: false,
        }
    }
}

module.exports = { CATEGORIES_TABLE, categorieSchema, Categories };
