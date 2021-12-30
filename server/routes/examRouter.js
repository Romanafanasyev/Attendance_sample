const Router = require('express')
const router = new Router()
const examController = require('../controllers/examController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', checkRole('ADMIN'), examController.create)
router.get('/', examController.getAll)

module.exports = router