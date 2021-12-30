const Router = require('express')
const router = new Router()
const attendancyController = require('../controllers/attendancyController')


router.post('/', attendancyController.create)



module.exports = router