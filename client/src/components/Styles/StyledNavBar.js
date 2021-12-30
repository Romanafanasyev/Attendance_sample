import styled from "styled-components";

const Ul = styled.ul`
  width: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: gray;
  background: linear-gradient(to right bottom, dodgerblue, darkmagenta);
`;

const Li = styled.li`
  float: left;
  
  &:last-child {
    border-left: 1px solid white;
    
    float:right;
  }
  
  & button {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-weight: bold;
    border: none;
    border-right: 1px solid white;
    background: inherit;
  }

  & button:hover:not(.active) {
    background-color: darkmagenta;
  }
`;

export {Ul, Li};
