import React, {useContext} from "react";
import {Context} from "../index";
import {Div, Ol, Li} from "./Styles/StyledSchedule"

function ScheduleMaker(props) {
    const {stuff} = useContext(Context)
    const subjects = props.subjects
    const lessons = props.lessons
    return(
        <Ol>
            {lessons.map(lesson =>
                (lesson.day === props.day && subjects.length !== 0) ?
                    <Li key={lesson.id}>
                        <Div className={"subject"}>{subjects[lesson.subjectId-1].name.toString()}</Div>
                        <Div className={"room"}>Кабинет: {lesson.room.toString()}</Div>
                        <Div className={"time"}>{lesson.star_time=== null ? "8:20": lesson.star_time.toString()}</Div>
                    </Li>
                    :
                    ""
            )}
        </Ol>
    );
}

export default ScheduleMaker