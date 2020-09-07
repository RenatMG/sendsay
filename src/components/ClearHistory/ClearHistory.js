import React from 'react';
import classes from './ClearHistory.module.scss'
import {useConsole} from "../../containers/ApiConsole/ApiConsoleContext";

const ClearHistory = () => {
    const {clearActions} = useConsole();
    return (
        <div className={classes.clearHistory} onClick={clearActions}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M1 1L19 19" stroke="#0D0D0D" strokeWidth="2" strokeLinecap="round"/>
                <path d="M19 1L1 19" stroke="#0D0D0D" strokeWidth="2" strokeLinecap="round"/>
            </svg>

        </div>
    );
};

export default ClearHistory;