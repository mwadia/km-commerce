const sequelize = require('../database/db/connection');
const { Model, CreationOptional, DataTypes } = require('sequelize');

class User extends Model {}
User.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userImg: {
      type: DataTypes.STRING,
    },
    mony: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    sequelize,
  }
);

module.exports = User;
