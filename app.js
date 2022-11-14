const express = require('express');
const router = require('./router');
const app = express();
const compression = require('compression');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 5000;
app.set('port', port);
app.disable('x-powered-by');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(compression());
app.use(cookieParser());

app.use(router);
module.exports = app;
