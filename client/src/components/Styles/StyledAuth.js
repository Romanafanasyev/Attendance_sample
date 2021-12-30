import styled from "styled-components";

const A = styled.a`
  font-size: 14px;
  line-height: 1.7;
  color: #666666;
  margin: 0px;
  transition: all 0.4s;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  
  &:focus {
    outline: none !important;
  }
  
  &:hover {
    text-decoration: none;
    color: #6a7dfe;
    linear-gradient(to right bottom, #21d4fd, #b721ff);
  }

  &.txt2 {
    font-size: 13px;
    color: #333333;
    line-height: 1.5;
  }

`;

const Input = styled.input`
  &.input100 {
    font-size: 15px;
    color: #555555;
    line-height: 1.2;

    display: block;
    width: 100%;
    height: 45px;
    background: transparent;
    padding: 0 5px;
  }
  &.input100:focus + .focus-input100::after {
    top: -18px;
  }
  &.input100:focus + .focus-input100::before {
    width: 100%;
  }
`;

const Button = styled.button`
  width: 85px;
  height:35px;
  outline: none !important;
  border: none;
  background: linear-gradient(to right bottom, #21d4fd, #b721ff);
  border-radius: 15px;
  color:white;
  font-weight: bold;
  margin-left: 40%;
  margin-bottom: 5%;
  margin-top: 0;
  &:hover {
    cursor: pointer;
  }
`;

const Span = styled.span`
  &.txt1 {
    font-size: 13px;
    color: #666666;
    line-height: 1.5;
  }
  &.login100-form-title {
    display: block;
    font-size: 30px;
    color: #333333;
    line-height: 1.2;
    text-align: center;
  }
  &.login100-form-title i {
    font-size: 60px;
  }
  &.focus-input100 {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
  }
  &.focus-input100::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;

    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;

    background: #6a7dfe;
    background: -webkit-linear-gradient(left, #21d4fd, #b721ff);
    background: -o-linear-gradient(left, #21d4fd, #b721ff);
    background: -moz-linear-gradient(left, #21d4fd, #b721ff);
    background: linear-gradient(left, #21d4fd, #b721ff);
  }
  &.focus-input100::after {
    font-size: 15px;
    color: #999999;
    line-height: 1.2;

    content: attr(data-placeholder);
    display: block;
    width: 100%;
    position: absolute;
    top: 16px;
    left: 0px;
    padding-left: 5px;

    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
  }
  &.p-b-26 {
    margin-bottom: 50px;
    font-size: 40px;
  }
`;

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
    height: 700px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    padding: 35px 55px 33px 55px;
    box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
    -o-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
  }
  
  &.wrap-input100 {
    width: 100%;
    position: relative;
    border-bottom: 2px solid #adadad;
    margin-bottom: 20px;
  }
`;


const Form = styled.form`
  &.login100-form {
    width: 100%;
  }
`;

const Img = styled.img`
  margin-left:20%;
  margin-top:0;
`;

export {A, Input, Button, Span, Div, Form, Img};