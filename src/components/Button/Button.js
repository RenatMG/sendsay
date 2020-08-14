import React from 'react';
import Loader from "../Loader/Loader";
import classes from './Button.module.scss'

const Button = ({loading = false, title}) => {
    return (
        <button type="submit" className={classes.button}>
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