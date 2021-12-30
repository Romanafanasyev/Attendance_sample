import React, {useContext, useEffect, useState} from 'react';
import {A, Input, Button, Span, Div, Form, Img} from '../components/Styles/StyledAuth'
import {LOGIN_ROUTE, PUBLIC_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {useHistory, useLocation} from "react-router-dom"
import {Context} from "../index";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {getUsers} from "../http/stuffAPI";

const Auth =  () => {
    const {user} = useContext(Context)
    const history = useHistory()
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [user_list, setUser_list] = useState([])
    let thisUserRole

    useEffect(() => {
        let cleanupFunction = false;
        function createUserList() {
            getUsers().then(data => {if(!cleanupFunction) setUser_list(data);})
            return user_list
        }
        createUserList()
        return () => cleanupFunction = true;
    }, []);



    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(name, password);
            } else {
                data = await registration(name, password)
            }
            history.push(PUBLIC_ROUTE)
            user.setUser(name)
            if(user_list.length !== 0) {
                user_list.map(oneUser =>
                    oneUser.name === user._user.toString() ?
                        thisUserRole = oneUser.role
                        :
                        ""
                )
            }
            user.setRole(thisUserRole)
            user.setIsAuth(true)

        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
            <Div className="limiter">
                <Div className="container-login100">
                    <Div className="wrap-login100">
                        <Img src="//images.vfl.ru/ii/1630615306/427eade3/35719786_m.jpg" alt="logogo" title="logogo" border="0" width="240" height="240"/>
                        <Div className="login100-form">
					<Span className="login100-form-title p-b-26">
						Welcome
					</Span>
                            <Span className="login100-form-title p-b-48">
						<i className="zmdi zmdi-font"/>
					</Span>

                            <Div className="wrap-input100 validate-input" data-validate="Valid email is: a@b.c">
                                <Input
                                    className="input100" type="text" name="name"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                                    <Span className="focus-input100" data-placeholder="Name"/>
                            </Div>

                            <Div className="wrap-input100 validate-input" data-validate="Enter password">
						<Span className="btn-show-pass">
							<i className="zmdi zmdi-eye"/>
						</Span>
                                <Input
                                    className="input100" type="password" name="pass"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                                    <Span className="focus-input100" data-placeholder="Password"/>
                            </Div>

                            <Div className="container-login100-form-btn">
                                <Div className="wrap-login100-form-btn">
                                    <div className="login100-form-bgbtn"/>
                                    <Button className="login100-form-btn" onClick={() => click()}>
                                        {isLogin ? "Login": "Sign up"}
                                    </Button>
                                </Div>
                            </Div>

                            <Div className="text-center p-t-115">
						<Span className="txt1">
                            {isLogin ? "Don’t have an account? ": "Already have an account? "}

						</Span>
                                {isLogin ? <A className="txt2" href={REGISTRATION_ROUTE}>
                                     Sign up
                                </A>
                                    :
                                    <A className="txt2" href={LOGIN_ROUTE}>
                                         Log in
                                    </A>}

                            </Div>
                        </Div>
                    </Div>
                </Div>
            </Div>
    );
};

export default Auth;