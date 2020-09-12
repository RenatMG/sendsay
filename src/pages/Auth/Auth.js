import React, {useState} from 'react';
import './Auth.scss';
import {Decor} from '../../components';
import AuthForm from "./components/AuthForm";
import AuthFormGitLink from "./components/AuthFormGitLink";
import {Transition} from "react-transition-group";
import AuthFormGitInfo from "./components/AuthFormGitInfo";


const Auth = () => {
    const [gitLink, setGitLink] = useState(false);
    // exited
    // entering
    // entered
    // exiting
    return (
        <Transition in={gitLink} timeout={0}>
            {
                state => {
                    return (

                        <div className={`auth ${state}`}>
                            <div className={'auth-main'}>
                                <Decor/>
                                < AuthForm/>
                                < AuthFormGitLink
                                    setGitLink={setGitLink}
                                />
                            </div>
                            <AuthFormGitInfo setGitLink={setGitLink}/>
                        </div>
                    )
                }
            }
        </Transition>
    );
};

export default Auth;