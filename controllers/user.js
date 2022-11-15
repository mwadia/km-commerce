const { User } = require('../database/db');
const { jwtFun } = require('../middleware/jwt');
const bcrypt = require('bcryptjs');
const storeUser = async (req, res) => {
  const {name,email,password}=JSON.parse(req.body.data)
const userImg=req.fileUrl
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
      mony:5000
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
    const isPassword = await bcrypt.compare(password,isUser.password);
    if (isPassword) {
      jwtFun(
        {
          name: isUser.name,
          id: isUser.id,
          userImg: isUser.userImg,
        },
        res
      );
    } else {
      res.json({ msg: 'password is wrong' });
    }
  }
};

const editUser=async (req,res)=>{
  
  const {name, email, password, userImg,newPassword } = req.body;
  const {id}=req.user
  const isPassword=await User.findOne({attributes:['password'], where:{id}})
  const ComperePassword = await bcrypt.compare(password,isPassword.password);
  if(ComperePassword){
    let hashPassword
    if(newPassword){
       hashPassword = await bcrypt.hash(newPassword, 12);
    }
     await User.update({name, email, password:hashPassword||isPassword.password, userImg},{where:{id}})
     jwtFun(
      {
        name: name,
        id:id,
        userImg:userImg,
      },
      res
    );
  }else{
    res.json({msg:'password is wrong!!'})

  }




}

module.exports = { storeUser, signIn,editUser };
