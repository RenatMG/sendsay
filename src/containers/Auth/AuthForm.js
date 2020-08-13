import React, {Component} from 'react';
import {connect} from "react-redux";
import AuthFormInput from "./AuthFormInput";
import {validator} from "../../handlers/formHandlers";
import {login} from "../../store/actions/authActions";
import AuthFormError from "./AuthFormError";
import Loader from "../../components/Loader/Loader";

class AuthForm extends Component {

    state = {
        formControls: this.props.formControls,
        formTouched: false,
        formValid: true,
    };

    form = React.createRef();

    formSubmitHandler = (evt) => {
        evt.preventDefault();

        const form = evt.target;
        const formControls = {...this.state.formControls};
        const formData = {};
        let formValid = true;

        Object.keys(formControls).forEach(property => {

            const control = formControls[property];
            const value = form[control.id].value;
            const error = validator(value, control.validation);

            formValid = formValid && !error;
            control.error = error;
            control.value = value;
            if (value) {
                formData[control.id] = value
            }
        });

        if (formValid) {
            this.props.login(formData)
        } else {
            this.setState({
                formValid,
                formControls,
                formTouched: true // ?  под вопросом
            })
        }

    }


    render() {

        const {formControls} = this.state;
        const {error, loading} = this.props;

        return (
            <div className="auth-form">
                <div className="auth-form__title">API-консолька</div>
                {
                    error && <AuthFormError error={error}/>
                }
                <form onSubmit={this.formSubmitHandler} ref={this.form}>
                    {
                        Object.keys(formControls).map(property => {
                            return (
                                <AuthFormInput key={property}
                                               control={formControls[property]}/>
                            )
                        })
                    }
                    {

                    }
                    <button type="submit" className="auth-form__btn">
                        {
                            !!loading
                                ?
                                <Loader/>
                                :
                                'Войти'
                        }
                    </button>

                </form>
            </div>
        );
    }
};

const mapState = (state) => {
    return {
        formControls: state.auth.formControls,
        loading: state.auth.loading,
        error: state.auth.error
    }
}
const actions = {
    login
}

export default connect(mapState, actions)(AuthForm);