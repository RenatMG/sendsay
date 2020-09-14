import React from 'react';
import ErrorSmile from "../../svg/ErrorSmile";
import classes from './Error.module.scss'

const Error = ({error: {id, explain}}) => {
    return (
        <div className={classes.Error}>
            <ErrorSmile/>
            <div className={classes.Error__description}>
                <div className={classes.Error__head}>Вход не вышел</div>
                <div className={classes.Error__body}>{JSON.stringify({id, explain})}</div>
            </div>
        </div>
    );
};

export default Error;