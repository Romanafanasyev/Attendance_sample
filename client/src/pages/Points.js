import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import PointsMaker from "../components/PointsMaker";
import {Div} from "../components/Styles/StyledPoints"
import {getAtten, getExams, getSubjects, getUsers} from "../http/stuffAPI";

const Points = observer(() => {
    const {user} = useContext(Context)
    const [user_list, setUser_list] = useState([])
    const [subj_list, setSubj_list] = useState([])
    const [exam_list, setExam_list] = useState([])
    const [atten_list, setAtten_list] = useState([])
    let thisUserId = 1

    useEffect(() => {
        let cleanupFunction = false;
        function createUserList() {
            getUsers().then(data => {if(!cleanupFunction) setUser_list(data);})
            return user_list
        }
        createUserList()
        return () => cleanupFunction = true;
    }, []);

    useEffect(() => {
        let cleanupFunction = false;
        function createSubjList() {
            getSubjects().then(data => {if(!cleanupFunction) setSubj_list(data);})
            return subj_list
        }
        createSubjList()
        return () => cleanupFunction = true;
    }, []);

    useEffect(() => {
        let cleanupFunction = false;
        function createExamList() {
            getExams().then(data => {if(!cleanupFunction) setExam_list(data);})
            return exam_list
        }
        createExamList()
        return () => cleanupFunction = true;
    }, []);

    useEffect(() => {
        let cleanupFunction = false;
        function createAttenList() {
            getAtten().then(data => {if(!cleanupFunction) setAtten_list(data.attend);})
            return atten_list
        }
        createAttenList()
        return () => cleanupFunction = true;
    }, []);

    if(user_list.length !== 0) {
        user_list.map(oneUser =>
            oneUser.name === user._user.toString() ?
                thisUserId = oneUser.id
                :
                ""
        )
    }
    return (
        <Div className={"limiter"}>
            <Div className={"schedule"}>
                <Div className={"try"}>
                    <Div className={"title-container"} >
                        <h1>Points</h1>
                    </Div>
                        <PointsMaker userId={thisUserId} subjects={subj_list} exams={exam_list} attendance={atten_list}/>
                </Div>
            </Div>
        </Div>
    );
});

export default Points;