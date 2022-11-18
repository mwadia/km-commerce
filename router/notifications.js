const notifications=require('../controllers/notification')
const router = require('express').Router();

router.get('/getnotifications',notifications.getNotification)
router.delete('/destroyallaotifications',notifications.destroyAllNotifications)

module.exports=router