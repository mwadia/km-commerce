const jwt = require('jsonwebtoken');
require('dotenv').config();
const jwtFun = (info, res) => {
  jwt.sign(info, process.env.SECRET_KEY, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.cookie('token', data);
      res.json({msg:'success!!',data:info});
    }
  });
};
const auth = (req, res, next) => {
  const { token } = req.cookies;
  jwt.verify(token, process.env.SECRET_KEY, (err, data) => {
    if (!err) {
      req.user = {
        name: data.name,
        id: data.id,
        img: data.userImg,
      };
    }

    next();
  });
};
module.exports = { jwtFun, auth };
