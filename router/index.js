const userCtrl = require('../controllers/user');
const products=require('../controllers/products')
const router = require('express').Router();

router.post('/signup', userCtrl.storeUser);
router.post('/signin', userCtrl.signIn);
router.put('/edituser', userCtrl.editUser);
router.get('/allproduct',products.getProduct)
router.post('/addnewproduct',products.addNewProduct)
router.put('/editproduct/:id',products.editProduct)
router.delete('/destroyproduct/:id',products.dstroyProduct)

module.exports = router;
