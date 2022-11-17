const sequelize = require('./connection');
const { Product, User,Cart,Notification } = require('../../modules');

User.hasMany(Product);
Product.belongsTo(User);

Cart.belongsTo(User);

Product.hasMany(Cart);
Cart.belongsTo(Product);
User.hasMany(Notification)
Notification.belongsTo(User);

module.exports = {
  sequelize,
  Product,
  User,Cart,Notification
};
