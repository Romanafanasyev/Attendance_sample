import {makeAutoObservable} from "mobx";

export default class StuffStore {
    constructor() {
        this._subject = [
            {id: 1, name: 'Математика'},
            {id: 2, name: 'Физика'},
            {id: 3, name: 'Химия'},
            {id: 4, name: 'История Казахстана'}
        ]
        this._exam = [
            {id: 1, userId: 1, subjectId: 1, score: 100},
            {id: 2, userId: 25, subjectId: 1, score: 100},
            {id: 3, userId: 1, subjectId: 2, score: 30},
            {id: 4, userId: 25, subjectId: 2, score: 70}
        ]
        this._lesson = [
            {id: 1, subjectId: 1, teacherId: 1, room: "404", star_time:"8:20", day: "1"},
            {id: 2, subjectId: 2, teacherId: 2, room: "512", star_time:"9:50", day: "1"},
            {id: 3, subjectId: 3, teacherId: 3, room: "132", star_time:"11:20", day: "1"},
            {id: 4, subjectId: 1, teacherId: 1, room: "404", star_time:"8:20", day: "2"},
            {id: 5, subjectId: 1, teacherId: 1, room: "404", star_time:"9:50", day: "2"},
            {id: 6, subjectId: 2, teacherId: 2, room: "653", star_time:"8:20", day: "3"},
            {id: 7, subjectId: 2, teacherId: 2, room: "653", star_time:"8:20", day: "4"},
            {id: 8, subjectId: 3, teacherId: 3, room: "132", star_time:"9:50", day: "4"},
            {id: 9, subjectId: 4, teacherId: 4, room: "222", star_time:"8:20", day: "5"},
            {id: 10, subjectId: 1, teacherId: 1, room: "404", star_time:"8:20", day: "6"}
        ]

        this._attendancy_subject = [
            {id: 1, subjectId: 1, attendancyId: 1},
            {id: 2, subjectId: 2, attendancyId: 1},
            {id: 3, subjectId: 1, attendancyId: 1},
            {id: 4, subjectId: 3, attendancyId: 1},
            {id: 5, subjectId: 1, attendancyId: 1},
        ]
        makeAutoObservable(this)
    }

    setSubject(subject) {
        this._subject = subject
    }
    setExam(exam) {
        this._exam = exam
    }
    setLesson(lesson) {
        this._lesson = lesson
    }
    setAttendancy_subject(attendancy_subject) {
        this._attendancy_subject = attendancy_subject
    }

    get Subject() {
        return this._subject
    }
    get Exam() {
        return this._exam
    }
    get Lesson() {
        return this._lesson
    }
    get Attendancy_subject() {
        return this._attendancy_subject
    }
}