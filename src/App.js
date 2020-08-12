import React from 'react';
import {NavLink, Route, Switch} from "react-router-dom";

import './App.scss';
import AuthForm from "./containers/Auth/Auth";
import ApiConsole from "./containers/ApiConsole/ApiConsole";



function App() {
    return (
        <>
            <nav>
                <NavLink to={'/'}>
                    auth
                </NavLink>
                <NavLink to={'/console'}>
                    console
                </NavLink>
            </nav>
            <Switch>
                <Route path='/' exact component={AuthForm}/>
                <Route path='/console' component={ApiConsole}/>
            </Switch>
        </>
    );
}

export default App;
