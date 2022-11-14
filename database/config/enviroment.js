require('dotenv').config();
require('dotenv').config();
const port = process.env.PORT || 8080;
const nodeEnv = process.env.NODE_ENV;
if (!nodeEnv) {
  throw new Error('invalid Node Environment');
}

let dbUrl;
switch (nodeEnv) {
  case 'development':
    dbUrl = process.env.DEV_DB_URL;
    break;
  case 'production':
    dbUrl = process.env.DATABASE_URL;
    break;
  case 'test':
    dbUrl = process.env.TEST_URL;
    break;
  default:
    throw new Error('DataBase Connection Url Error');
}

module.exports = {
  port,
  dbUrl,
  nodeEnv,
};
