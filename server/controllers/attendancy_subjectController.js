const {Attendancy_subject, User} = require("../models/models");

class Attendancy_subjectController {
    async create(req, res){
        const {subjectId, attendancyId} = req.body
        const att_sub = await Attendancy_subject.create({subjectId, attendancyId})
        return res.json(att_sub)
    }

    async getAll(req, res){
        let {subjectId, attendancyId} = req.query
        let attend, at_count;
        if (!subjectId && !attendancyId) {
            attend = await Attendancy_subject.findAll()
            at_count = await Attendancy_subject.count()
        }
        if (subjectId && !attendancyId) {
            attend = await Attendancy_subject.findAll({where:{subjectId}})
            at_count = await Attendancy_subject.count({where:{subjectId}})
        }
        if (!subjectId && attendancyId) {
            attend = await Attendancy_subject.findAll({where:{attendancyId}})
            at_count = await Attendancy_subject.count({where:{attendancyId}})
        }
        if (subjectId && attendancyId) {
            attend = await Attendancy_subject.findAll({where:{subjectId, attendancyId}})
            at_count = await Attendancy_subject.count({where:{subjectId, attendancyId}})
        }
        return res.json({attend, at_count})
    }

    async deleteOne(req, res){
        await Attendancy_subject.destroy({where:{id:req.params.id}})
        const attendancy_subjects = await Attendancy_subject.findAll()
        return res.json(attendancy_subjects)
    }
}

module.exports = new Attendancy_subjectController()