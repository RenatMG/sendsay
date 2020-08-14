import React, {useState} from 'react';

const AuthFormInput = ({control}) => {

    const {id, label, subLabel, type, error} = control
    const [value, setValue] = useState('')

    const inputHandler = (evt) => {
        setValue(evt.target.value)
    }

    return (
        <div className={`auth-form__group ${error ? 'auth-form__group_error' : ''}`}>
            {
                subLabel
                    ?
                    <div className='d-flex justify-content-between'>
                        <label htmlFor={id}>{label}</label>
                        <small className="auth-form-text form-text text-muted">{subLabel}</small>
                    </div>
                    :
                    <label htmlFor={id}>{label}</label>
            }
            <input type={type}
                   className="auth-form-control form-control"
                   id={id}
                   onChange={inputHandler}
                   value={value}
            />
        </div>
    );
};

export default AuthFormInput;

