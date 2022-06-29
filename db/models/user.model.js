const { Model, DataTypes, Sequelize } = require('sequelize')

const USER_TABLE = 'users'

const userSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
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

class User extends Model {
  static associate() {
    //associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tablaName: USER_TABLE,
      modelName: 'User',
      timestamps: false,
    }
  }
}

module.exports = { USER_TABLE, userSchema, User };
