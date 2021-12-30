import styled from "styled-components";

const Div = styled.div`
  &.limiter {
    width: 100%;
    margin: 0 auto;
  }

  &.container-login100 {
    width: 100%;
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

  &.wrap-login100 {
    width: 500px;
    height: 450px;
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

const Span = styled.span`
  display: block;
  margin-top:10px;
  font-size: 25px;
`;

const H1 = styled.h1`
  border-bottom: 2px solid black;
  border-image: linear-gradient(to right bottom, #21d4fd, #b721ff);
  border-image-slice: 1;
  margin-bottom: 20px;
`;



export {Div, Span, H1};