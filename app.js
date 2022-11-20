const express = require('express');
const router = require('./router');
const { auth } = require('./middleware/jwt');
const app = express();
const compression = require('compression');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const isAuth = require('./middleware/auth');
const port = process.env.PORT || 5000;
app.set('port', port);
app.disable('x-powered-by');
const cors=require('cors')
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
app.use(cors({
  origin: ["*",'http://localhost:3000','https://classy-puffpuff-258b7c.netlify.app'],
  credentials: true
}))
const io = new Server(server,{
  cors:{
    origin:["*",'http://localhost:3000','https://classy-puffpuff-258b7c.netlify.app'],
    methods:["GET","POST","DELETE"]
  }
})

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(compression());
app.use(cookieParser());

app.use(auth);
app.use('/user', isAuth);
io.on('connection', (socket) => {
  socket.on('notification', (msg) => {
    io.emit('notification',msg);
  });
});
app.use(router);
module.exports = {server,io};
