const { Product,Cart } = require('../database/db');
const { Op } = require('sequelize');

const getProduct=async(req,res)=>{
  let filterProducts={}
  let {id,q,gte,lt,c}=req.query
  if(!q){
q=''
  }
  if(!c){
    c=''
  }
  if(id){
    filterProducts={
      id,
     
      category:{
        [Op.iLike]: `%${c}%`

      },
      name: {
        [Op.iLike]: `%${q}%`
      }
    }
  }else if(gte&&lt){
    filterProducts= {
      price:{
        [Op.between]:[gte,lt],

      },  category:{
        [Op.iLike]: `%${c}%`

      },
    name: {
      [Op.iLike]: `%${q}%`
    }}
  }
  else{
    filterProducts={name: {
      [Op.iLike]: `%${q}%`
    },  category:{
      [Op.iLike]: `%${c}%`

    }}
  }
const allProducts=await Product.findAll({where:filterProducts,order: [
  ['id', 'DESC'],
]})
  res.json(allProducts)
}
const getProductsById=async(req,res)=>{
 
const allProducts=await Product.findAll({where:{UserId:req.params.id},order: [
  ['id', 'DESC'],
]})
  res.json(allProducts)
}
const addNewProduct=async(req,res)=>{
  try{
    let productImg=req.fileUrl
    const {name,price,count,category}=JSON.parse(req.body.data)
    UserId=req.user.id
    const newProduct=await Product.create({name,price,count,productImg,category,UserId})
    res.json({data:newProduct,msg:'add new product is succuss!'});
  }catch(err){
    res.status(400).json({
      msg: 'something went wrong',
      err,
    });
  }

}
const editProduct=async (req,res)=>{
  try{
    const {name,price,count,category,productImg}=JSON.parse(req.body.data)
    let newImg=req.fileUrl ||productImg
    await Product.update({name,price,count,category,productImg:newImg},{where:req.params})
    res.json({data:{...JSON.parse(req.body.data),productImg:newImg||productImg},msg:'edit the product is succuss!'})   
  }catch(err){
    res.status(400).json({
      msg: 'something went wrong',
      err,
    });
  }
 }
const dstroyProduct=async(req,res)=>{
  try{
    await Cart.destroy({
      where: { ProductId: req.params.id},
    });
    await Product.destroy({
      where: req.params
    })
   
    console.log(req.params.id);

    res.json({msg:'deleted this product is succuss!'})
  }catch(err){
    res.status(400).json({
      msg: 'something went wrong',
      err,
    });
  }

}

module.exports={getProduct,addNewProduct,editProduct,dstroyProduct,getProductsById}