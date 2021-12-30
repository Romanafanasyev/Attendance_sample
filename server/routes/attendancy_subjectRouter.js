const Router = require('express')
const router = new Router()
const attendancy_subjectController = require('../controllers/attendancy_subjectController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', checkRole('ADMIN'), attendancy_subjectController.create)
router.get('/', attendancy_subjectController.getAll)
router.delete('/:id', attendancy_subjectController.deleteOne)


module.exports = router