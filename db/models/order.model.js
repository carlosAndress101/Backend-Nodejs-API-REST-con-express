const { Model, DataTypes, Sequelize } = require('sequelize');
const {CUSTOMER_TABLE} = require('../models/customer.model');
const ORDER_TABLE = 'orders';

const OrderSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  customerId: {
    field: 'customer_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CUSTOMER_TABLE,
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
  },
  total: {
    type: DataTypes.VIRTUAL,
    get() {
      if (this.items.length > 0) {
        return this.items.reduce((total, item) => {
          return total + (item.price * item.Order_Product.amount);
        }, 0);
      }
      return 0;
    }
  }
}

class Order extends Model{
    static associate(models){
      this.belongsTo(models.customer, {
        as:'customer'
      });
      this.belongsToMany(models.product, {
        as:'items',
        through: models.Order_Product,
        foreignKey:'orderId',
        otherKey:'productId'
      })
    }
    static config(sequelize){
      return {
        sequelize,
        tableName:ORDER_TABLE,
        modelName:'Order',
        timestamps:false
      }
    }
  }

module.exports = { Order, ORDER_TABLE, OrderSchema};


