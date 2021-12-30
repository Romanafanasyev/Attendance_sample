import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import ScheduleMaker from "../components/ScheduleMaker";
import {Div} from "../components/Styles/StyledSchedule"
import {getLessons, getSubjects} from "../http/stuffAPI";

var date = new Date

const Actual = observer(() => {
    const [schedule, setSchedule] = useState([])
    const [subj, setSubj] = useState([])

    useEffect(() => {
        let cleanupFunction = false;
        function createSchedule() {
            getLessons().then(data => {if(!cleanupFunction) setSchedule(data);})
            return schedule
        }
        createSchedule()
        return () => cleanupFunction = true;
    }, []);

    useEffect(() => {
        let cleanupFunction = false;
        function createSubjects() {
            getSubjects().then(data => {if(!cleanupFunction) setSubj(data);})
            return subj
        }
        createSubjects()
        return () => cleanupFunction = true;
    }, []);
    return (
        <Div className={"limiter"}>
            <Div className={"schedule"}>
                <Div className={"try"}>
                    <Div className={"title-container"} >
                        <h1>ACTUAL</h1>
                    </Div>
                    <Div className={"schedule-container"}>
                        <Div className={"weekday"}>
                            <span>Расписание на сегодня</span>
                            <ScheduleMaker day={date.getDay().toString()} lessons={schedule} subjects={subj}/>
                        </Div>
                    </Div>
                </Div>
            </Div>
        </Div>
    );
});

export default Actual;