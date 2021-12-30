import React, {createContext, useContext, useEffect, useState} from 'react';
import {Div, Select, Option, Button, Span, Input} from '../components/Styles/StyledStartLesson'
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {createCode, getLessons, getSubjects, getUsers, markAttend} from "../http/stuffAPI";

var date = new Date
export let subj_name

const StartLesson = observer(() => {
    const [subj_list, setSubj_list] = useState([])
    const [code, setCode] = useState(null)
    const [les_list, setLes_list] = useState([])
    const [inputCode, setInputCode] = useState('')

    const [attendancyId, setAttandancyId] = useState('27')
    const [id, setId] = useState('3')

    const {user} = useContext(Context)
    let chosenLessonId

    useEffect(() => {
        let cleanupFunction = false;
        function createLesList() {
            getLessons().then(data => {if(!cleanupFunction) setLes_list(data);})
            return les_list
        }
        createLesList()
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


    function createNewCode() {
        let a
        (document.getElementById("select1") !== null && document.getElementById("select1").options[document.getElementById("select1").selectedIndex] !== undefined) ?
            a = document.getElementById("select1").options[document.getElementById("select1").selectedIndex].text.split("\u00A0")[0]
            :
            ""
        subj_list.map(subject => subject.name === a ?
        chosenLessonId = subject.id : ""
        )
        createCode({"id": chosenLessonId.toString()}).then(code => setCode(code))
    }

    const markMyAttendance = async () => {
        let data
        if(document.getElementById("select2") !== null) {
            subj_name = document.getElementById("select2").options[document.getElementById("select2").selectedIndex].text.split("\u00A0")[0]
        }
        data = await markAttend(id, attendancyId, inputCode).then(data => console.log(data))
    }

    return (
        <Div className="limiter">
            <Div className="container-login100">
                <Div className="wrap-login100">
                    <h1>Начать урок</h1>
                    <Span>Выберите урок:</Span>

                    {user._role === "ADMIN" ?
                        <Div>
                            <Select id="select1">
                                {les_list.map(lesson =>
                                    (lesson.day === date.getDay().toString() && subj_list.length !== 0) ?
                                        <Option>
                                            {subj_list[lesson.subjectId-1].name.toString()}
                                            &nbsp;&nbsp;
                                            {lesson.star_time.toString()}
                                        </Option>
                                        :
                                        ""
                                )}
                            </Select>

                            <Button onClick={() => createNewCode()}>Начать урок</Button>
                            <Span className={"code"}>Скажите студентам код:</Span>
                            <Span className={"code number"}>{code}</Span>
                        </Div>
                        :
                        <Div>
                            <Select id="select2">
                                {les_list.map(lesson =>
                                    (lesson.day === date.getDay().toString() && subj_list.length !== 0) ?
                                        <Option>
                                            {subj_list[lesson.subjectId-1].name.toString()}
                                            &nbsp;&nbsp;
                                            {lesson.star_time.toString()}
                                        </Option>
                                        :
                                        ""
                                )}
                            </Select>
                            <Button>Подтвердить</Button>
                            <Span className={"code"}>Введите код, который Вам назвал учитель:</Span>
                                <Input type="text" name="inputCode" size="4" value={inputCode}
                                       onChange={e => setInputCode(e.target.value)}/>
                                <Button onClick={() => markMyAttendance()}>Отметить присутствие</Button>
                        </Div>
                    }
                    <Div className="who-came">

                    </Div>
                </Div>
            </Div>
        </Div>
    );
});

export default StartLesson;