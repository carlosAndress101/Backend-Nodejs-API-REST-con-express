const { Model, DataTypes, Sequelize } = require('sequelize');
const {ORDER_TABLE} = require('./order.model');
const {PRODUCTS_TABLE} = require('./products.model');
const ORDER_PRODUCT_TABLE = 'orders_product';

const OrderProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  orderId: {
    field: 'order_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ORDER_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  amount:{
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  productId: {
    field: 'product_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PRODUCTS_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  createAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field:'create_at',
    defaultValue:Sequelize.NOW
  }
}

class Order_Product extends Model{
    static associate(){
      //
    }
    static config(sequelize){
      return {
        sequelize,
        tableName:ORDER_PRODUCT_TABLE,
        modelName:'Order_Product',
        timestamps:false
      }
    }
  }

module.exports = { Order_Product, ORDER_PRODUCT_TABLE, OrderProductSchema};


