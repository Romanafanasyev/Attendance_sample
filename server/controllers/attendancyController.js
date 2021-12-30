const {Attendancy} = require("../models/models");

class AttendancyController {
    async create(req, res){
        const {userId} = req.body
        const attendancy = await Attendancy.create({userId})
        return res.json(attendancy)
    }
}

module.exports = new AttendancyController()