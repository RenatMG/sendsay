import React, {useEffect} from 'react';
import {Redirect} from "react-router-dom";

import './App.scss';
import {connect} from "react-redux";
import {autoLogin} from "./store/actions/authActions";
import Routes from "./routes";


const App = ({isLogin, autoLogin, autoLoginLoading}) => {

    useEffect(() => {
        if (!isLogin) {
            autoLogin()
        }
    }, [isLogin, autoLogin]);

    return (
        <>
            {
                !autoLoginLoading &&
                <>
                    <Routes/>
                    {
                        isLogin
                            ?
                            <Redirect to='/console'/>
                            :
                            <Redirect to='/'/>
                    }
                </>
            }
        </>
    );

};

const mapState = (state) => {

    return {
        isLogin: state.auth.isLogin,
        autoLoginLoading: state.auth.autoLoginLoading
    }
}

const actions = {
    autoLogin
}

export default connect(mapState, actions)(App);
