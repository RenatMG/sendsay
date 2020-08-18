import React from 'react';
import classes from './ActionStatus.module.scss'

const ActionStatus = ({status = 'success'}) => {
    return (
        <div className={`${classes.actionStatus} ${status}`}/>
    );
};

export default ActionStatus;