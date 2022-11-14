const userCtrl = require('../controllers/user');
const router = require('express').Router();

router.post('/signup', userCtrl.storeUser);
router.post('/signin', userCtrl.signIn);
router.put('/edituser', userCtrl.editUser);


module.exports = router;
