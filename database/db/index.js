const sequelize = require('./connection');
const { Product, User } = require('../../modules');

User.hasMany(Product);
Product.belongsTo(User);
module.exports = {
  sequelize,
  Product,
  User,
};
