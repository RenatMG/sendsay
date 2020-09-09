import React from 'react';
import classes from './ClearHistory.module.scss'
import Clear from "../../../../svg/Clear";
import {useConsole} from "../../context/ApiConsoleContext";
import {connect} from "react-redux";
import {clearActions, setEdit} from "../../../../store/actions/apiConsoleActions";

const ClearHistory = ({clearActions, setEdit}) => {
    const {setCurrentActionId} = useConsole();

    const clearHandler = () => {
        clearActions();
        setEdit(false)
        setCurrentActionId(null);
    }

    return (
        <div className={classes.clearHistory} onClick={clearHandler}>
            <div>
                <Clear/>
            </div>
        </div>
    );
};

const actions = {
    clearActions,
    setEdit
};

export default connect(false, actions)(ClearHistory);