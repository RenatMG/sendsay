import React from 'react';
import classes from './ActionChip.module.scss'
// import ActionMenu from "../ActionMenu/ActionMenu";
// import ActionStatus from "../ActionStatus/ActionStatus";
import Menu from "../../svg/Menu";

const ActionChip = ({action: {title, status = 'success'}}) => {

    return (
        <div className={classes.actionChip}>
            <div className={`${classes.actionChip__status} ${status === 1 ? 'success' : 'danger'}`}/>
            <div className={classes.actionChip__title}>{title}</div>
            <div className={classes.actionChip__menu}>
               <Menu/>
            </div>
        </div>
    );
};

export default ActionChip;