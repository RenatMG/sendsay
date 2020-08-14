import React, {Component,} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";

import './App.scss';
import AuthForm from "./containers/Auth/Auth";
import ApiConsole from "./containers/ApiConsole/ApiConsole";
import {connect} from "react-redux";
import {autoLogin} from "./store/actions/authActions";


class App extends Component {

    componentDidMount() {
        if (!this.props.isLogin) {
            this.props.autoLogin()
        }
    }

    render() {
        const {isLogin, autoLoginLoading} = this.props

        return (
            <>
                {
                    autoLoginLoading
                        ?
                        null
                        :
                        <>
                            <Switch>
                                <Route path='/' exact component={AuthForm}/>
                                <Route path='/console' component={ApiConsole}/>
                            </Switch>
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
    }
}

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
