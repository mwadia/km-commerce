const sequelize = require('./connection');
const { Product, User,Cart } = require('../../modules');

User.hasMany(Product);
Product.belongsTo(User);

Cart.belongsTo(User);

Product.hasMany(Cart);
Cart.belongsTo(Product);
module.exports = {
  sequelize,
  Product,
  User,Cart
};
