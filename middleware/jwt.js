const jwt = require('jsonwebtoken');
require('dotenv').config();
const jwtFun = (info, res) => {
  jwt.sign(info, process.env.SECRET_KEY, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.cookie('token', data,{
        maxAge: new Date() * 0.001 + 300,
        domain: 'mydomain.com',
        secure: true,
        sameSite:'none',
      });
      res.json({ msg: 'success!!', data: {...info,token:data} });
    }
  });
};
const auth = (req, res, next) => {
  let token
  console.log(req.header('Authorization'),111111111);
if(req.header('Authorization')){
   token  = req.header('Authorization').split(' ')[1];
console.log(222222);
}
  jwt.verify(token, process.env.SECRET_KEY, (err, data) => {
    if (!err) {
      req.user = {
        name: data.name,
        id: data.id,
        userImg: data.userImg,
      };
    }

    next();
  });
};
module.exports = { jwtFun, auth };
