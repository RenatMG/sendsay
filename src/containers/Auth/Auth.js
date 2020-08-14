import React from 'react';
import './Auth.scss'

import AuthForm from "./AuthForm";
import Decor from "../../components/Decor/Decor";

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