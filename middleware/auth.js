const isAuth=(req,res,next)=>{
  if(req.user){
    res.json(req.user)
    next()
  }else{
    res.json({msg:'you have to sign up!!'})
  }

}
module.exports=isAuth