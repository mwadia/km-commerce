const sequelize = require('../database/db/connection');
const { Model, CreationOptional, DataTypes } = require('sequelize');

class product extends Model {}
product.init(
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
  },
  {
    sequelize,
  }
);

module.exports = product;
