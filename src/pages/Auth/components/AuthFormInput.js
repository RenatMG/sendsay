import React from 'react';

const AuthFormInput = ({control, inputHandler}) => {

    const {id, label, subLabel, type, error, value} = control;

    return (
        <div className={`auth-form__group ${error ? 'auth-form__group_error' : ''}`}>

            <div className='auth-form__label'>
                <label htmlFor={id}>{label}</label>
                {
                    subLabel &&
                    <small>{subLabel}</small>
                }
            </div>

            <input type={type}
                   className="auth-form__control"
                   id={id}
                   onChange={inputHandler}
                   value={value}
            />
        </div>
    );
};

export default AuthFormInput;

