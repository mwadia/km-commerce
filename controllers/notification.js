const { Notification } = require('../database/db');
const getNotification=async(req,res)=>{

  try{
    if(req.user){
      const notification=await Notification.findAll({where:{UserId:req.user.id},attributes:['massage']})
      res.json({data:notification})
    }
   
  }catch (err) {
    res.status(400).json({
      msg: 'something went wrong!',
      err,
    });
  }
}
const destroyAllNotifications=async (req,res)=>{
  try{
    await Notification.destroy({
      where: {UserId:req.user.id},
    });
res.json({msg:'notfications deleted!'})
  }catch (err) {
    res.status(400).json({
      msg: 'something went wrong!',
      err,
    });
  }
}
module.exports={
  getNotification,destroyAllNotifications
}