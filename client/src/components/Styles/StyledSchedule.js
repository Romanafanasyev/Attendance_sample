import styled from "styled-components";


const Div = styled.div`
  &.limiter {
    width: 100%;
    margin: 0 auto;
  }
  &.schedule {
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

  &.try {
    width: 550px;
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
  &.weekday {
    border-top: 1px solid #DAD2CA;
  }
    `;

const Ol = styled.ol`
  counter-reset: li;
  list-style: none;
  padding: 0;
  margin-left: 50px;
  text-shadow: 0 1px 0 rgba(255,255,255,.5);
`;

const Li = styled.li`
  position: relative;
  display: block;
  padding: .4em .4em .4em 2em;
  margin: .9em 0;
  background: #DAD2CA;
  color: #444;
  text-decoration: none;
  border-radius: .3em;
  transition: .3s ease-out;
  width: 400px;
  height: 35px;
  
  &:hover {background: #E9E4E0;}
  &:before {
    content: counter(li);
    counter-increment: li;
    position: absolute;
    left: -2.5em;
    top: 38%;
    margin-top: -1.3em;
    background: linear-gradient(to right bottom, #21d4fd, #b721ff);
    height: 3em;
    width: 3em;
    line-height: 39px;
    border: .3em solid white;
    text-align: center;
    border-radius: 2em;
    transition: all .3s ease-out;
    color:white;
    font-size: 18px;
  }


`;

export {Div, Ol, Li};
