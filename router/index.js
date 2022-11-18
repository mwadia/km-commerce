const router = require('express').Router();
const productsRouter=require('./products')
const userRouter =require('./user')
const cartRouter=require('./cart')
const notificationsRouter=require('./notifications')
router.use(productsRouter)
router.use(userRouter)
router.use(cartRouter)
router.use(notificationsRouter)


module.exports = router;
