const Sequelize = require('sequelize').Sequelize
const environment = require('../config/enviroment')
console.log(environment)
const sequelize = new Sequelize(environment.dbUrl ?? '', {
  dialectOptions: { ssl: environment.ssl },
  define: {
    timestamps: true,
  },
  logging: false,
})
module.exports = sequelize
