import React, {useEffect} from 'react';
import {NavLink, Redirect, Route, Switch} from "react-router-dom";

import './App.scss';
import AuthForm from "./containers/Auth/Auth";
import ApiConsole from "./containers/ApiConsole/ApiConsole";
import {connect} from "react-redux";
import {autoLogin} from "./store/actions/authActions";


function App({isLogin, autoLogin}) {

    useEffect(() => {
        if (!isLogin) {
            autoLogin();
        }
    })

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
            {
                isLogin && <Redirect to='/console'/>
            }
        </>
    );
}

const mapState = (state) => {

    return {
        isLogin: state.auth.isLogin
    }
}

const actions = {
    autoLogin
}

export default connect(mapState, actions)(App);
