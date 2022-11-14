const { User } = require('../database/db');
const { jwtFun } = require('../middleware/jwt');
const bcrypt = require('bcryptjs');
const storeUser = async (req, res) => {
  const { name, email, password, userImg } = req.body;
  const isUser = await User.findOne({
    attributes: ['email'],
    where: { email: email },
  });
  if (isUser) {
    res.json({ msg: 'the acount is exist' });
  } else {
    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
      userImg,
    });
    jwtFun(
      { name: newUser.name, id: newUser.id, userImg: newUser.userImg },
      res
    );
  }
};
const signIn = async (req, res) => {
  const { email, password } = req.body;
  const isUser = await User.findOne({
    attributes: ['id', 'password', 'name', 'userImg'],
    where: { email: email },
  });
  if (!isUser) {
    res.json({ msg: 'the email is not exist' });
  } else {
    const isPassword = await bcrypt.compare(isUser.password, password);
    if (isPassword) {
      jwtFun(
        {
          name: isUser.name,
          id: isUser.id,
          userImg: isUser.userImg,
        },
        res
      );
      res.json({ massage: 'suc' });
    } else {
      res.json({ msg: 'password is wrong' });
    }
  }
};

module.exports = { storeUser, signIn };
