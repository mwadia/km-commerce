const userCtrl = require('../controllers/user');
const products=require('../controllers/products')
const cart=require('../controllers/cart')
const router = require('express').Router();
const isAuth =require('../middleware/auth')
const {  uploadFile,reduceSize,cloudUpload}=require('../middleware/upbloudImg')
router.post('/signup',uploadFile().single('file'),reduceSize,cloudUpload ,userCtrl.storeUser);
router.post('/signin', userCtrl.signIn);
router.put('/edituser',isAuth,userCtrl.editUser);
router.get('/allproduct',products.getProduct)
router.post('/addnewproduct',isAuth,products.addNewProduct)
router.put('/editproduct/:id',isAuth,products.editProduct)
router.delete('/destroyproduct/:id',isAuth,products.dstroyProduct)
router.post('/addproducttocart',isAuth,cart.addProductToCart)
router.get('/getcartproduct',isAuth,cart.getPrductsCart)
router.delete('/destroyoneproductcart/:id',isAuth,cart.destroyOneProductInCart)
router.delete('/destroyallproductcart/:id',isAuth,cart.destroyAllProductsInCart)
router.put('/buyproducts',isAuth, cart.buyProducts);

module.exports = router;
