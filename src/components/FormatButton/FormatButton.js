import React from 'react';
import classes from './FormatButton.module.scss'
import AlignRight from "../../svg/AlignRight";
import {useConsole} from "../../containers/ApiConsole/ApiConsoleContext";

const FormatButton = ({id}) => {

    const {setFormat} = useConsole();
    return (
        <div className={classes.FormatButton} onClick={()=>setFormat(id)}>
            <AlignRight/>
            <span>Форматировать</span>
        </div>
    );
};

export default FormatButton;