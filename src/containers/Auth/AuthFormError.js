import React from 'react';

const AuthFormError = ({error}) => {
    const {id, explain} = error

    return (
        <div className='auth-error'>
            <div className='d-flex'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g opacity="0.8">
                        <path
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                            stroke="#CF2C00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 15H16" stroke="#CF2C00" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M9 9H9.01" stroke="#CF2C00" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M15 9H15.01" stroke="#CF2C00" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </g>
                </svg>
                <div className='auth-error__description'>
                    <div className='auth-error__head'>Вход не вышел</div>
                    <div className='auth-error__body'>{JSON.stringify({id, explain})}</div>
                </div>
            </div>
        </div>
    );
};

export default AuthFormError;