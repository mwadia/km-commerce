const userCtrl = require('../controllers/user');
const products = require('../controllers/products');
const cart = require('../controllers/cart');
const router = require('express').Router();
const isAuth = require('../middleware/auth');
const {
  uploadFile,
  reduceSize,
  cloudUpload,
} = require('../middleware/upbloudImg');
router.post(
  '/signup',
  uploadFile().single('file'),
  reduceSize,
  cloudUpload,
  userCtrl.storeUser
);
router.post('/signin', userCtrl.signIn);
router.put('/edituser', userCtrl.editUser);
router.get('/allproduct', products.getProduct);
router.post('/addnewproduct', products.addNewProduct);
router.put('/editproduct/:id', products.editProduct);
router.delete('/destroyproduct/:id', products.dstroyProduct);
router.post('/addproducttocart', cart.addProductToCart);
router.get('/getcartproduct', cart.getPrductsCart);
router.delete(
  '/destroyoneproductcart/:id',

  cart.destroyOneProductInCart
);
router.delete(
  '/destroyallproductcart',
  cart.destroyAllProductsInCart
);
router.put('/buyproducts', cart.buyProducts);
router.put('/putcountproduct/:id',cart.putCountProduct)
module.exports = router;
