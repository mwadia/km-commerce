const Sequelize = require('sequelize').Sequelize;
const environment = require('../config/enviroment');

const sequelize = new Sequelize(environment.dbUrl ?? '', {
  define: {
    timestamps: true,
  },
  logging: false,
});

module.exports = sequelize;
