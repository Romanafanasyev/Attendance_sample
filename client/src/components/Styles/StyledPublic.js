import styled from "styled-components";

const Img = styled.img`
     margin-left: 30px;
`;
const Div = styled.div`
  &.limiter {
    width: 100%;
    margin: 0 auto;
    background: #f2f2f2;
  }
  &.container {
    width: 25000px;
    min-height: 100vh;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background: #f2f2f2;
  }

  &.wrapper {
    width: 550px;
    height:550px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    padding: 35px 55px 33px 55px;
    box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
    -o-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
  }
`;

export {Img, Div};