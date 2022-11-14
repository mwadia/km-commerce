const userCtrl = require('../controllers/user');
const router = require('express').Router();

router.post('/signup', userCtrl.storeUser);
router.post('/signin', userCtrl.signIn);

module.exports = router;
