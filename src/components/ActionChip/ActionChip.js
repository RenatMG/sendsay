import React from 'react';
import classes from './ActionChip.module.scss'
import ActionMenu from "../ActionMenu/ActionMenu";
import ActionStatus from "../ActionStatus/ActionStatus";

const ActionChip = ({action: {title, status = 'success'}}) => {

    return (
        <div className={classes.actionChip}>
            <div className={`${classes.actionChip__status} ${status === 1 ? 'success' : 'danger'}`}/>
            <div className={classes.actionChip__title}>{title}</div>
            <div className={classes.actionChip__menu}>
                <svg width="4" height="18" viewBox="0 0 4 18">
                    <circle cx="2" cy="2" r="2"/>
                    <circle cx="2" cy="9" r="2"/>
                    <circle cx="2" cy="16" r="2"/>
                </svg>
            </div>
        </div>
    );
};

export default ActionChip;