import React from 'react';
import ErrorSmile from "../../../svg/ErrorSmile";


const AuthFormError = ({error:{id, explain}}) => {
    return (
        <div className='auth-error'>
            <ErrorSmile/>
            <div className='auth-error__description'>
                <div className='auth-error__head'>Вход не вышел</div>
                <div className='auth-error__body'>{JSON.stringify({id, explain})}</div>
            </div>
        </div>
    );
};

export default AuthFormError;