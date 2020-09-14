
import React, {useState} from 'react';
import './Auth.scss';
import {Decor, GitLink} from '../../components';
import AuthForm from "./components/AuthForm";
import Rules from "../../features/Rules/Rules";
import {Transition} from "react-transition-group";
import Page from "../../layouts/Page/Page";

const Auth = () => {
    const [open, setOpen] = useState(false);
    const title = 'Форма авторизации';
    return (
        <Page title={title}>
            <Transition in={open} timeout={0}>
                {
                    state => {
                        return (
                            <div className={`auth ${state}`}>
                                <div className={'auth-main'}>
                                    <Decor/>
                                    <AuthForm/>
                                    <GitLink
                                        title='@link-to-your-github'
                                        onClickHandler={setOpen}
                                    />
                                </div>
                                <Rules
                                    transition={state}
                                    onClickHandler={setOpen}
                                    title={title}
                                    type='authForm'/>
                            </div>
                        )
                    }
                }
            </Transition>
        </Page>
    );
};

export default Auth;