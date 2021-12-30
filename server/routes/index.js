const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const subjectRouter = require('./subjectRouter')
const lessonRouter = require('./lessonRouter')
const examRouter = require('./examRouter')
const attendancyRouter = require('./attendancyRouter')
const attendancy_subjectRouter = require('./attendancy_subjectRouter')



router.use('/user', userRouter)
router.use('/lesson', lessonRouter)
router.use('/subject', subjectRouter)
router.use('/exam', examRouter)
router.use('/attendancy',attendancyRouter)
router.use('/attendancy_subject',attendancy_subjectRouter)

module.exports = router
