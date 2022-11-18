const router = require('express').Router();
const products = require('../controllers/products');
const {
  uploadFile,
  reduceSize,
  cloudUpload,
} = require('../middleware/upbloudImg');
router.get('/allproduct', products.getProduct);
router.get('/allproducts/:id', products.getProductsById);
router.post('/addnewproduct',uploadFile().single('file'),
reduceSize,
cloudUpload,products.addNewProduct);
router.put('/editproduct/:id',uploadFile().single('file'),
reduceSize,
cloudUpload, products.editProduct);
router.delete('/destroyproduct/:id', products.dstroyProduct);

module.exports=router