const ApiError = require('../error/ApiError')
const {Lesson, Attendancy_subject} = require('../models/models')

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

async function deleteCode(id) {
    await Lesson.update({ver_code: "-1"}, {where: {id}})
    return 0
}

class LessonController {
    async create(req, res){
        const {subjectId, teacherId, room, star_time, day} = req.body
        const lesson = await Lesson.create({subjectId, teacherId, room, star_time, day})
        return res.json(lesson)
    }

    async getAll(req, res){
        const {day} = req.query
        let lessons;
        if (!day) {
            lessons = await Lesson.findAll()
        }
        if (day) {
            lessons = await Lesson.findAll({where:{day}})
        }
        return res.json(lessons)
    }

    async start(req, res){
        const {id} = req.body
        const code = getRandomIntInclusive(1000, 9999)
        const changed = await Lesson.update({ver_code: code}, {where: {id}})
        setTimeout(deleteCode, process.env.CODE_LIFETIME, id);
        return res.json(code)
    }

    async mark(req, res){
        const {id, attendancyId, inputCode} = req.body
        const thislesson = await Lesson.findAll({where:{id}})
        const subjectId = thislesson[0].subjectId
        const ver_code = thislesson[0].ver_code
        let attendancy_subject;
        if (inputCode === String(ver_code)){
            attendancy_subject = await Attendancy_subject.create({subjectId, attendancyId})
            return res.json(attendancy_subject)
        }
        return res.json({message: 'WRONG LESSON CODE'})
    }
}

module.exports = new LessonController()