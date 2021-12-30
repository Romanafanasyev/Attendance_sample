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
  &.subject {
    float: left;
    margin-left: 0;
  }
  &.room {
    float: left;
    margin-left: 5px;
    position: absolute;
    left: 50%;
  }
  &.time {
    float: right;
    margin-left: 5px;
  }
`;

const Select = styled.select`
  width: 270px;
  height: 30px;
  font-size: 18px;
  font-weight: bold;
  color:white;
  background-color: #eee;
  border-radius: 5px;
  background-image: linear-gradient(to right bottom, #21d4fd, #b721ff);
  box-shadow: 4px 4px #ccc;
  display:block;
`;

const Option = styled.option`
  color:black;
  border-radius: 10px;
  background-color:white;
`;

const Button = styled.button`
  display: block;
  line-height: 35px;
  margin-top: 15px;
  padding: 0 15px;
  font-size: 18px;
  font-weight: bold;
  position: relative;
  background-color: transparent;
  border: 2px solid #34495E;
  color: #34495E;
  transition: all 0.4s;
  box-shadow: 3px 3px #ccc;
  &:hover{
    border-image: linear-gradient(to right bottom, #21d4fd, #b721ff);
    border-image-slice: 1;
  }
`;

const Span = styled.span`
  &.code {
    display: inline-block;
    margin-top: 20px;
  }
  &.number{
    display: inline-block;
    margin-top: 20px;
    margin-left: 5px;
    font-size:20px;
  }
`;

const Input = styled.input`
  display: block;
  line-height: 35px;
  margin-top: 5px;
  margin-bottom:10px;
  padding: 0 15px;
  font-size: 18px;
  font-weight: bold;
  position: relative;
  background-color: transparent;
  border: 2px solid #34495E;
  color: #34495E;
  transition: all 0.4s;
  box-shadow: 3px 3px #ccc;
  &:focus{
    outline:none;
    border-image: linear-gradient(to right bottom, #21d4fd, #b721ff);
    border-image-slice: 1;
  }
    
`;


export {Div, Select, Option, Button, Span, Input};