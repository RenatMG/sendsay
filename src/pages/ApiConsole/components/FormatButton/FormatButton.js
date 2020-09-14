import React from 'react';
import classes from './FormatButton.module.scss'
import AlignRight from "../../../../svg/AlignRight";
const FormatButton = ({setFormat}) => {
    return (
        <div className={classes.FormatButton} onClick={()=>setFormat(true)}>
            <AlignRight/>
            <span>Форматировать</span>
        </div>
    );
};

export default FormatButton;