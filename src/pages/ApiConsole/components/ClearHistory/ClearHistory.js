import React from 'react';
import classes from './ClearHistory.module.scss'
import Clear from "../../../../svg/Clear";
import {useConnect} from "../../context/ApiConsoleConnect";

const ClearHistory = () => {
    const {clearActions} = useConnect();
    return (
        <div className={classes.clearHistory} onClick={clearActions}>
           <Clear/>
        </div>
    );
};

export default ClearHistory;