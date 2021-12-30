import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import styled from 'styled-components'
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";



const AppWrapper = styled.div`
width:100%;
min-height: 100vh;
padding: 0;
background: white;
`

const App = observer(() => {
  return (
      <BrowserRouter>
          <AppWrapper>
              <NavBar />
              <AppRouter />
          </AppWrapper>
      </BrowserRouter>
  );
});

export default App;