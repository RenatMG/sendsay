
import React, {useRef, useState} from 'react';
import {connect} from "react-redux";
import {Title, Button, Input, Error} from "../../../components"
import {validator} from "../../../services/formHandlers";
import {login} from "../../../store/actions/authActions";


const AuthForm = ({formControls, login, loading, error}) => {

    const [controls, setControls] = useState(formControls);
    const [formValid, setFormValid] = useState(true);
    const [formTouched, setFormTouched] = useState(false);

    const formRef = useRef();

    const formSubmitHandler = (evt) => {
        evt.preventDefault();
        setFormTouched(true);
        if (checkFormHandler()) {
            sendFormDataHandler();
        }
    };

    const sendFormDataHandler = () => {
        const formData = {};
        const formControls = {...controls};
        Object.keys(formControls).forEach(property => {
            formData[property] = formControls[property].value
        });
        login(formData)
    };

    const inputHandler = (evt) => {
        if (formTouched) {
            checkFormHandler();
        } else {
            const formControls = {...controls};
            const control = formControls[evt.target.id];
            control.value = evt.target.value;
            setControls(formControls);
        }
    };

    const checkFormHandler = () => {
        const formControls = {...controls};
        const form = formRef.current;
        let isFormValid = true;
        Object.keys(formControls).forEach(property => {
            const control = formControls[property];
            const value = form[control.id].value;
            const error = validator(value, control.validation);
            isFormValid = isFormValid && !error;
            control.error = error;
            control.value = value;
        });
        setControls(formControls);
        setFormValid(isFormValid);
        return isFormValid;
    };


    return (
        <div className="auth-form">
            <Title size='lg'>API-консолька</Title>
            {
                error && <Error error={error}/>
            }
            <form onSubmit={formSubmitHandler} ref={formRef} autoComplete={'on'}>
                {
                    Object.keys(controls).map(property => {
                        return (
                            <Input key={property}
                                   inputHandler={inputHandler}
                                   control={controls[property]}/>
                        )
                    })
                }
                <Button title='Войти' disabled={!formValid} loading={loading}/>
            </form>
        </div>
    );

};

const mapState = (state) => {
    return {
        formControls: state.auth.formControls,
        loading: state.auth.loading,
        error: state.auth.error
    }
};
const actions = {
    login
};

export default connect(mapState, actions)(AuthForm);

