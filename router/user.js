const router = require('express').Router();
const userCtrl = require('../controllers/user');
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
router.get('/getuser/:id',userCtrl.getuser)
router.post('/signin', userCtrl.signIn);
router.put('/edituser', userCtrl.editUser);

module.exports=router