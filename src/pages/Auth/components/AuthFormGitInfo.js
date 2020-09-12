import React, {useEffect} from 'react';
import AuthFormGitLink from "./AuthFormGitLink";
import {initDb, writeRulesData} from "../../../store/actions/firebaseActions";
import {connect} from "react-redux";


const AuthFormGitInfo = ({setGitLink, initDb, writeRulesData}) => {

    // const data = {
    //     rules: [
    //         {
    //             id: 1,
    //             value: "Нельзя сабмитить формы с незаполнеными обязательными полями, при попытке нужно подсветить невалидные поля.",
    //             result: true,
    //             description: ""
    //         },
    //         {
    //             id:2,
    //             value: "Логином может быть как email, так и строка из латинских букв, цифр и подчеркиваний.",
    //             result: true,
    //             description: ""
    //         }
    //     ]
    //
    // };

    useEffect(() => {
        initDb()
    }, [])


    return (
        <div className='auth-main auth-info'>
            <div className='auth-info__content'>
                <AuthFormGitLink
                    setGitLink={setGitLink}
                />
                <button
                    onClick={() => writeRulesData(1, 'Нельзя сабмитить формы с незаполнеными обязательными полями, при попытке нужно подсветить невалидные поля.', true)}>rec
                </button>
            </div>
        </div>
    );
};

const mapState = state => {
    return {
        // db:state.firebase.
    }
}

const actions = {
    initDb,
    writeRulesData
}


export default connect(mapState, actions)(AuthFormGitInfo);