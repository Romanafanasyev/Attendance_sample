import React, {useContext} from 'react';
import {Div, Span, H1} from '../components/Styles/StyledAdmin'
import {Context} from "../index";

const Admin = () => {
    const {user} = useContext(Context)
    return (
        <Div className="limiter">
            <Div className="container-login100">
                <Div className="wrap-login100">
                    <H1>Мой профиль</H1>
                    <img src="//images.vfl.ru/ii/1631980893/83440e24/35911819_m.jpg" alt="Avatar" title="Avatar" border="0" width="100" height="120"/>
                    <Span>Имя: {user._user.toString()}</Span>
                    <Span>Роль: {user._role.toString()}</Span>
                    <Span>Университет: Туран-Астана</Span>
                    <Span>Группа: P3121</Span>
                </Div>
            </Div>
        </Div>
    );
};

export default Admin;