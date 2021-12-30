import styled from "styled-components";


const Table = styled.table`
  border: 1px solid #eee;
  table-layout: fixed;
  width: 100%;
  margin-bottom: 70px;  
  
  & th{
    font-weight: bold;
    padding: 5px;
    background: #efefef;
    border: 1px solid #dddddd;
  }

  & td {
    padding: 5px 10px;
    border: 1px solid #eee;
    text-align: left;
  }

  & tbody tr:nth-child(odd) {
    background: #fff;
  }

  & tbody tr:nth-child(even) {
    background: #F7F7F7;
  }
  &.diagrams{
    border: none;
    table-layout: fixed;
    width: 100%;
    margin-bottom: 0px;
    text-align: center;
  }
  &.diagrams th{
    font-weight: normal;
    font-size: 25px;
    padding: 5px;
    background: #fff;
    border: none;
  }

  &.diagrams td {
    padding: 0;
    border: none;
    text-align: center;
    height:200px;
    width: 300px;
  }
  &.diagrams tbody tr {
    background: #fff;
    height:150px;
  }
  
`;

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

`;



export {Table, Div};