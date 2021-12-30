const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Attendancy, Subject} = require('../models/models')

const generateJwt = (id, name, role) => {
    return jwt.sign(
        {id: id, name, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}


class UserController {
    async registration(req, res, next){
        const {name, password, role} = req.body
        if (!name || !password) {
            return next(ApiError.badRequest('Некорректный name или password'))
        }
        const candidate = await User.findOne({where: {name, password}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({name, role, password: hashPassword})
        const attendancy = await Attendancy.create({userId: user.id})
        const token = generateJwt(user.id, user.name, user.role)
        return res.json({token})
    }

    async login(req, res, next){
        const {name, password} = req.body
        const user = await User.findOne({where: {name}})
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(user.id, user.name, user.role)
        return res.json({token})
    }

    async check(req, res, next){
        const token = generateJwt(req.user.id, req.user.name, req.user.role)
        return res.json({token})
    }

    async getAll(req, res){
        const users = await User.findAll()
        return res.json(users)
    }

    async deleteOne(req, res){
        await User.destroy({where:{id:req.params.id}})
        const users = await User.findAll()
        return res.json(users)
    }
}

module.exports = new UserController()
