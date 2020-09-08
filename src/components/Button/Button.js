import React from 'react';
import {Loader} from "../";
import classes from './Button.module.scss'

const Button = ({loading = false, title, disabled = false}) => {
    return (
        <button type="submit" className={`${classes.button} ${disabled ? classes.disabled : ''}`}>
            {
                !!loading
                    ?
                    <Loader/>
                    :
                    <>{title}</>
            }
        </button>
    );
};

export default Button;