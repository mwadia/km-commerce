const { sequelize, Product, User, Cart } = require('./index');
const environment = require('../config/enviroment');
const data = require('./seeds.json');

const buildDB = async () => {
  await sequelize.sync({ force: true });
  console.log(33333);

  await User.bulkCreate(data.User);
  await Product.bulkCreate(data.Animal);
  await Cart.bulkCreate(data.Cart);
};

if (environment.nodeEnv !== 'test') {
  console.log(222222222);
  buildDB();
}

module.exports = buildDB;
