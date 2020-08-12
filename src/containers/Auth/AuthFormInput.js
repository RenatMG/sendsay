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


/*

 <div className="auth-form__group">
                <label htmlFor="login">Логин</label>
                <input type="text" className="auth-form-control form-control" id="login"
                />
            </div>

            <div className="auth-form__group">
                <div className='d-flex justify-content-between'>
                    <label htmlFor="sub-login">Сублогин</label>
                    <small id="subLoginHelp" className="auth-form-text form-text text-muted">Опционально</small>
                </div>
                <input type="text" className="auth-form-control form-control" id="sub-login"
                       aria-describedby="subLoginHelp"/>
            </div>

            <div className="auth-form__group">
                <label htmlFor="password">Пароль</label>
                <input type="password" className="form-control" id="password"/>
            </div>

* */