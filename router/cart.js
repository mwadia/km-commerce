const cart = require('../controllers/cart');
const router = require('express').Router();

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


module.exports=router