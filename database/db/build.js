const { sequelize, Product, User, Cart } = require('./index');
const environment = require('../config/enviroment');
const data = require('./seeds.json');

const buildDB = async () => {
  await sequelize.sync({ force: true });
  await User.bulkCreate(data.User);
  await Product.bulkCreate(data.Animal);
  await Cart.bulkCreate(data.Cart);
};

if (environment.nodeEnv !== 'test') {
  buildDB();
}

module.exports = buildDB;
