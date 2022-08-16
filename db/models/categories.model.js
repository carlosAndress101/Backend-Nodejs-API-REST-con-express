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
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  imagen: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field:'create_at',
    defaultValue:Sequelize.NOW
  }
}

class Category extends Model{
    static associate(models){
      this.hasMany(models.product, {
        as:'products',
        foreignKey:'categoryId'
      });
    }
    static config(sequelize){
      return {
        sequelize,tableName:CATEGORIES_TABLE,modelName:'Category',timestamps:false
      }
    }
  }

module.exports = { Category, CATEGORIES_TABLE, categorieSchema};


