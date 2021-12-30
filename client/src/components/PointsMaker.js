import {observer} from "mobx-react-lite";
import React, {useContext} from "react";
import {Context} from "../index";
import {Table, Div} from "./Styles/StyledPoints"
import {getExams} from "../http/stuffAPI";


function PointsMaker(props){
    const {stuff} = useContext(Context)
    let points = 0
    let points_all = 0
    let attendance = 0
    let attendance_all = 0
    let subjects = [{id: 1, name: 'Математика'}]
    let exams = stuff._exam
    let attendancy = [{id: 1, subjectId: 1, attendancyId: 1}]
    if(props.subjects.length !== 0){subjects = props.subjects}
    // if(props.exams.length !== 0){exams = props.exams}
    if(props.attendance.length !== 0){attendancy = props.attendance}
    exams.map(exam =>
    {    exam.userId === props.userId ?
             points += exam.score
            :
            points += 0;
        exam.userId === props.userId ?
            points_all += 100
            :
            points_all += 0 }
    )
    attendancy.map(atten => atten.attendancyId === props.userId ?
            attendance += 1
            :
            attendance += 0
    )
    stuff._lesson.map(lesson => attendance_all+=1)
    console.log(exams)
    return(
        <Div className={"exams-container"}>
            <Table>
                <thead>
                <tr><th>Предмет</th><th>Балл</th></tr>
                </thead>
                <tbody>
                {exams.map(exam =>
                    (exam.userId === props.userId && exam.subjectId <= subjects.length) ?
                        <tr key={exam.id}>
                            <td className={"subject"}>{subjects[exam.subjectId-1].name.toString()}</td>
                            <td className={"room"}>{exam.score.toString()} / 100</td>
                        </tr>
                        :
                        ""
                )}
                </tbody>
            </Table>
            <Table className={"diagrams"}>
                <thead><tr><th>Посещаемость</th><th>Успеваемость</th></tr></thead>
                <tbody>
                <tr>
                    <td>
                        <svg width="100%" height="100%" viewBox="0 0 42 42" className="donut">
                            <defs>
                                <linearGradient id="Gradient" x1="0" x2="0" y1="0" y2="1">
                                    <stop offset="0%" stopColor="#21d4fd"/>
                                    <stop offset="100%" stopColor="#b721ff"/>
                                </linearGradient>
                            </defs>
                            <circle className="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"/>
                            <circle className="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent"
                                    stroke="#d2d3d4" strokeWidth="3"/>
                            <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent"
                                    stroke="url(#Gradient)" strokeWidth="3" strokeDasharray={(100*attendance/attendance_all).toString()+" "+(100-100*attendance/attendance_all).toString()}
                                    strokeDashoffset="0" transform="rotate(-90 21 21)"/>
                            <text x="33%" y="55%" className="chart-number" fontSize="5px" fontFamily="Sans-serif">
                                {(Math.round(10000*attendance/attendance_all)/100).toString()}%
                            </text>
                        </svg>
                    </td>
                    <td>
                        <svg width="100%" height="100%" viewBox="0 0 42 42" className="donut">
                            <defs>
                                <linearGradient id="Gradient" x1="0" x2="0" y1="0" y2="1">
                                    <stop offset="0%" stopColor="#21d4fd"/>
                                    <stop offset="100%" stopColor="#b721ff"/>
                                </linearGradient>
                            </defs>
                            <circle className="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"/>
                            <circle className="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent"
                                    stroke="#d2d3d4" strokeWidth="3"/>
                            <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent"
                                    stroke="url(#Gradient)" strokeWidth="3" strokeDasharray={(100*points/points_all).toString()+" "+(100-100*points/points_all).toString()}
                                    strokeDashoffset="0" transform="rotate(-90 21 21)"/>
                            <text x="40%" y="55%" className="chart-number" fontSize="5px" fontFamily="Sans-serif">
                                {(100*points/points_all).toString()}%
                            </text>
                        </svg>
                    </td>
                </tr>
                </tbody>
            </Table>
        </Div>
    );
}

export default PointsMaker