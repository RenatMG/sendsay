import React, {Component, useState} from 'react';
import {connect} from "react-redux";
import AuthFormInput from "./AuthFormInput";
import {validator} from "../../handlers/formHandlers";

class AuthForm extends Component {

    state = {
        formControls: this.props.formControls,
        formTouched: false,
        formValid: true,
        error: false,
        errorInfo: null
    }

    formSubmitHandler = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        const formControls = {...this.state.formControls};

        let formValid = true;
        Object.keys(formControls).forEach(property => {
            const control = formControls[property];
            const value = form[control.id].value;
            const error = validator(value, control.validation);

            formValid = formValid && !error;
            control.error = error;
            control.value = value;
        });

        this.setState({
            formValid,
            formControls,
            formTouched: true
        })
    }


    componentDidCatch(error, errorInfo) {
        this.setState({error, errorInfo})
    }

    render() {

        const {formControls, error, errorInfo} = this.state;

        if (error) {
            console.log(errorInfo)
            return null
        }

        return (
            <form autoComplete='off' onSubmit={this.formSubmitHandler}>
                {
                    Object.keys(formControls).map(property => {
                        return (
                            <AuthFormInput key={property}
                                           control={formControls[property]}/>
                        )
                    })
                }
                <button type="submit" className="auth-form__btn">Войти</button>

            </form>
        );
    }
};

const mapState = (state) => {
    return {
        formControls: state.auth.formControls
    }
}

export default connect(mapState)(AuthForm);