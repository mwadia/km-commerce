const { Cart, User, Product } = require('../database/db');
const getPrductsCart=async(req,res)=>{
  try{
    const {id}=req.user
    const productsCart=await Cart.findAll({
     include: [{model:Product,include:[{model:User,attributes:["id","name","userImg"]}]}],
      where:{UserId:id}
    })
    res.json({data:productsCart})
  }catch(err){
    res.status(400).json({
      msg: 'something went wrong',
      err,
    });
  }
}
const addProductToCart=async (req,res)=>{
  try{
    await Cart.create(req.body)
    res.json({msg:"add the product to cart succuss !!"})
  }catch(err){
    res.status(400).json({
      msg: 'something went wrong',
      err,
    });
  }
}
const destroyOneProductInCart=async(req,res)=>{
  try{
    await Cart.destroy({
      where: req.params
    })
    res.json({msg:'deleted this product is succuss!'})
  }catch(err){
    res.status(400).json({
      msg: 'something went wrong',
      err,
    });
  }
}
const destroyAllProductsInCart=async(req,res)=>{
  try{
    const {id}=req.body
    await Cart.destroy({
      where:{UserId:id }
    })
    res.json({msg:'deleted this product is succuss!'})
  }catch(err){
    res.status(400).json({
      msg: 'something went wrong',
      err,
    });
  }
}
const buyProducts=async (req,res)=>{
  try{
    const {total}=req.body
    const userCount=await User.findOne({where:{id:1}})
    let userMony=userCount.mony
    if(userMony<total){
      res.json({msg:`You only have ${userCount.mony} in your account,and you need ${total} to complete the deal`})
    }else{
      let arrMsg=[]

      const products=await Cart.findAll({where:{UserId:req.user.id}})
      for (let i = 0; i < products.length; i++) {
        const prct=await Product.findOne({where:{id:products[i].id}}) 
        if(prct.count<products[i].count){
          arrMsg.push({msg:`The quantity of ${prct.name} is only ${products[i].count}, do you want this quantity?`})
          }else{
            userMony=userMony-(prct.count*prct.price)
            await User.update({mony:userMony},{where:{id:req.user.id}})
          if(prct.count===products[i].count){
            await Product.destroy({
              where:{id:prct.id}
            })
          }else{
            await Product.update({
              count:prct.count - products[i].count
            },{where:{id:prct.id}})

          }

          arrMsg.push({msg:`The  ${prct.name} has been successfully purchased`})
  
        }    
      }
      res.json(arrMsg)
    }
   

    
  }catch(err){
    res.status(400).json({
      msg: 'something went wrong',
      err,
    });
  }
}
module.exports={addProductToCart,getPrductsCart
  ,destroyOneProductInCart
  ,destroyAllProductsInCart,buyProducts}