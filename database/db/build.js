const { sequelize, product, User } = require('./index');
const environment = require('../config/enviroment');
const data = require('./seeds.json');

const buildDB = async () => {
  await sequelize.sync({ force: true });
  await product.bulkCreate(data.Animal);
  await User.bulkCreate(data.User);
};

if (environment.nodeEnv !== 'test') {
  buildDB();
}

module.exports = buildDB;
