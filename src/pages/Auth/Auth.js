import React from 'react';
import './Auth.scss';
import {Decor} from '../../components';
import AuthForm from "./components/AuthForm";


const Auth = () => {
    return (
        <div className="auth">
            <Decor/>
            <AuthForm/>
            {/*    ???    */}
        </div>

    );
};

export default Auth;