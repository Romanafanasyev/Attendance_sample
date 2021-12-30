import React, {useContext} from 'react';
import {
    ACTUAL_ROUTE, ADMIN_ROUTE,
    ATTENDANCE_ROUTE,
    LOGIN_ROUTE,
    POINTS_ROUTE,
    PUBLIC_ROUTE, REGISTRATION_ROUTE,
    SCHEDULE_ROUTE,
    STARTLESSON_ROUTE
} from "../utils/consts";
import {Ul, Li} from './Styles/StyledNavBar'
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {useHistory, useLocation} from 'react-router-dom'

const NavBar = observer( () => {
    const location = useLocation()
    const isUserPage = location.pathname === ADMIN_ROUTE
    const {user} = useContext(Context)
    const history = useHistory()
    return (
        user.isAuth ?
            (isUserPage ?
                <Ul>
                    <Li><button className="active" onClick={() => history.push(PUBLIC_ROUTE)}>I2</button></Li>
                    <Li><button onClick={() => history.push(POINTS_ROUTE)}>Баллы</button></Li>
                    <Li><button onClick={() => history.push(SCHEDULE_ROUTE)}>Расписание</button></Li>
                    <Li><button onClick={() => history.push(ACTUAL_ROUTE)}>Актуальное</button></Li>
                    <Li><button onClick={() => history.push(ATTENDANCE_ROUTE)}>Присутствующие</button></Li>
                    <Li><button onClick={() => history.push(STARTLESSON_ROUTE)}>START LESSON</button></Li>
                    <Li><button onClick={() => {history.push(LOGIN_ROUTE); user.setIsAuth(false)}}>Выйти</button></Li>
                </Ul>
                :
                <Ul>
                    <Li><button className="active" onClick={() => history.push(PUBLIC_ROUTE)}>I2</button></Li>
                    <Li><button onClick={() => history.push(POINTS_ROUTE)}>Баллы</button></Li>
                    <Li><button onClick={() => history.push(SCHEDULE_ROUTE)}>Расписание</button></Li>
                    <Li><button onClick={() => history.push(ACTUAL_ROUTE)}>Актуальное</button></Li>
                    <Li><button onClick={() => history.push(ATTENDANCE_ROUTE)}>Присутствующие</button></Li>
                    <Li><button onClick={() => history.push(STARTLESSON_ROUTE)}>START LESSON</button></Li>
                    <Li><button onClick={() => history.push(ADMIN_ROUTE)}>Личный кабинет</button></Li>
                </Ul>)
            :
                <Ul>
                    <Li><button className="active" onClick={() => history.push(PUBLIC_ROUTE)}>I2</button></Li>
                    <Li><button onClick={() => {history.push(REGISTRATION_ROUTE)}}>Войти</button></Li>
                </Ul>
    );
});

export default NavBar