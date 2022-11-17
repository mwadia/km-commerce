const { Notification } = require('../database/db');

const getNotification=async(req,res)=>{
  try{
    const notification=await Notification.findAll({where:{UserId:req.user.id},attributes:['massage']})
    res.json({data:notification})
  }catch (err) {
    res.status(400).json({
      msg: 'something went wrong',
      err,
    });
  }
}
module.exports={
  getNotification
}