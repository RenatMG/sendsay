import React from 'react';
import {Route, Switch} from "react-router-dom";
import Auth from "./pages/Auth";
import ApiConsole from "./pages/ApiConsole";
//
const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Auth}/>
            <Route path='/console' component={ApiConsole}/>
        </Switch>
    );
};

export default Routes;