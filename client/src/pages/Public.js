import React from 'react';
import {Img, Div} from "../components/Styles/StyledPublic";

const Public = () => {
    return (
        <Div className={"limiter"}>
            <Div className={"container"}>
                <Div className={"wrapper"}>
                    <h1> I2 study - </h1>
                    <h2>Приложение для студентов</h2>
                    <p>Помогаем студентам учиться, а учителям учить!</p>
                    <Img src="//images.vfl.ru/ii/1630615306/427eade3/35719786_m.jpg" alt="logogo" title="logogo" border="0" width="340" height="340"/>
                </Div>
            </Div>
        </Div>
    );
};

export default Public;