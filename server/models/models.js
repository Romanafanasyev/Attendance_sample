const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER,  primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
    role:  {type: DataTypes.STRING, defaultValue: "USER"}
})

const Attendancy = sequelize.define('attendancy', {
    id: {type: DataTypes.INTEGER,  primaryKey: true, autoIncrement: true}
})

const Attendancy_subject = sequelize.define('attendancy_subject', {
    id: {type: DataTypes.INTEGER,  primaryKey: true, autoIncrement: true}
})

const Subject = sequelize.define('subject', {
    id: {type: DataTypes.INTEGER,  primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true}
})

const Exam = sequelize.define('exam', {
    id: {type: DataTypes.INTEGER,  primaryKey: true, autoIncrement: true},
    score: {type: DataTypes.INTEGER, defaultValue: 0}
})

const Attending = sequelize.define('attending', {
    id: {type: DataTypes.INTEGER,  primaryKey: true, autoIncrement: true}
})

const Lesson = sequelize.define('lesson', {
    id: {type: DataTypes.INTEGER,  primaryKey: true, autoIncrement: true},
    room: {type: DataTypes.STRING},
    star_time: {type: DataTypes.STRING},
    day:  {type: DataTypes.STRING},
    ver_code: {type: DataTypes.INTEGER}
})

const Subjectexam = sequelize.define('subjectexam', {
    id: {type: DataTypes.INTEGER,  primaryKey: true, autoIncrement: true}
})

const Userlesson = sequelize.define('userlesson', {
    id: {type: DataTypes.INTEGER,  primaryKey: true, autoIncrement: true}
})

User.hasOne(Attendancy)
Attendancy.belongsTo(User)

Attendancy.hasMany(Attendancy_subject)
Attendancy_subject.belongsTo(Attendancy)

Subject.hasOne(Attendancy_subject)
Attendancy_subject.belongsTo(Subject)

Subject.hasMany(Lesson)
Lesson.belongsTo(Subject)

Attending.hasMany(User)
User.belongsTo(Attending)

User.hasMany(Exam)
Exam.belongsTo(User)

Subject.belongsToMany(Exam, {through: Subjectexam})
Exam.belongsToMany(Subject, {through: Subjectexam})

User.belongsToMany(Lesson, {through: Userlesson})
Lesson.belongsToMany(User, {through: Userlesson})

module.exports = {
    User,
    Attendancy,
    Attendancy_subject,
    Subject,
    Exam,
    Subjectexam,
    Attending,
    Lesson,
    Userlesson
}
