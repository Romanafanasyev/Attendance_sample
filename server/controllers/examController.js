const {Exam, Lesson} = require('../models/models')

class ExamController {
    async create(req, res){
        const {userId, subjectId, score} = req.body
        const exam = await Exam.create({userId, subjectId, score})
        return res.json(exam)
    }

    async getAll(req, res){
        const {userId} = req.query
        let exams;
        if (!userId) {
            exams = await Exam.findAll()
        }
        if (userId) {
            exams = await Exam.findAll({where:{userId}})
        }
        return res.json(exams)
    }

}

module.exports = new ExamController()