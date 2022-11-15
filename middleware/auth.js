const isAuth=(req,res,next)=>{
  if(req.user){
    res.json({data:req.user,msg:'success!!'})
    next()
  }else{
    res.json({msg:'you have to sign up!!'})
  }

}
module.exports=isAuth