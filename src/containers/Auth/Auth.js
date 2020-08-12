import React from 'react';
import './Auth.scss'

import AuthForm from "./AuthForm";

const Auth = () => {
    return (
        <div className="auth">
            <div className='auth-decor'>
                <div className="auth-decor__item auth-decor__item_circle"/>
                <div className="auth-decor__item auth-decor__item_rectangle"/>
                <div className="auth-decor__item auth-decor__item_circle"/>
                <div className="auth-decor__item auth-decor__item_parallelogram"/>
            </div>
            <div className="auth-form">
                <div className="auth-form__title">API-консолька</div>
                <AuthForm/>
            </div>
            <div className="auth__link"/>
        </div>

    );
};

export default Auth;