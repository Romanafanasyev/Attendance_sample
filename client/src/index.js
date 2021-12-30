import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import StuffStore from "./store/StuffStore";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        stuff: new StuffStore(),
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);
