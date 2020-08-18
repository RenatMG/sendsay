import React from 'react';
import classes from './ActionChip.module.scss'
import ActionMenu from "../ActionMenu/ActionMenu";
import ActionStatus from "../ActionStatus/ActionStatus";

const ActionChip = ({status = 'success'}) => {

    return (
        <div className={classes.actionChip}>
            <ActionStatus status={status}/>
            <div className='mr-2'>track.get</div>
            <ActionMenu/>
        </div>
    );
};

export default ActionChip;