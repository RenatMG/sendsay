import React from 'react';
import classes from './FormatButton.module.scss'
import AlignRight from "../../../../svg/AlignRight";

import {useConnect} from "../../context/ApiConsoleConnect";
import {useConsole} from "../../context/ApiConsoleContext";


const FormatButton = () => {
    const {currentActionId} = useConsole();
    const {setFormat} = useConnect();
    return (
        <div className={classes.FormatButton} onClick={() => setFormat(currentActionId)}>
            <AlignRight/>
            <span>Форматировать</span>
        </div>
    );
};

export default FormatButton;