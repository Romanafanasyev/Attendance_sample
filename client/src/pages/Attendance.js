import React, {useEffect, useState} from 'react';
import {Div, Span, H1} from '../components/Styles/StyledAdmin'
import {subj_name} from "./StartLesson";
import {getAtten, getUsers} from "../http/stuffAPI";
var date = new Date

function checkDate(attenDate){
    let attenMonth = attenDate.split("T")[0].split("-")[1]
    let attenDay = attenDate.split("T")[0].split("-")[2]
    let attenH = attenDate.split("T")[1].split(":")[0]
    let month = (date.getMonth() + 1).toString().length === 1 ? "0"+(date.getMonth() + 1).toString() : (date.getMonth() + 1).toString()
    let day = date.getDate().toString().length === 1 ? "0"+date.getDate().toString() : date.getDate().toString()
    let h = date.getHours().toString().length === 1 ? "0"+date.getHours().toString() : date.getHours().toString()
    return (attenDay === day && attenMonth === month)
}

const Attendance = () => {
    const [user_list, setUser_list] = useState([])
    const [attending_list, setAttending_list] = useState([])

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
        function createAttendingList() {
            getAtten().then(data => {if(!cleanupFunction) setAttending_list(data.attend);})
            return attending_list
        }
        createAttendingList()
        return () => cleanupFunction = true;
    }, []);


    return (
        <Div className="limiter">
            <Div className="container-login100">
                <Div className="wrap-login100">
                    <H1>Присутствующие</H1>
                    <Span>С Вами на уроке {subj_name}:</Span>
                    <ol>
                        {console.log(attending_list)}
                    {(user_list.length !== 0 && attending_list.length !== 0)?
                        user_list.map(oneUser => attending_list.map( oneAtten =>
                            (checkDate(oneAtten.createdAt) && oneAtten.attendancyId === oneUser.id) ?
                                <li key={oneUser.id}>{oneUser.name}</li>
                                :
                                ""
                        ) )
                        :
                        ""
                    }
                    </ol>
                </Div>
            </Div>
        </Div>
    );
};

export default Attendance;