const sequelize = require('./connection');
const { product, User } = require('../../modules');

module.exports = {
  sequelize,
  product,
  User,
};
