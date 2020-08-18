import React from 'react';
import classes from './ActionMenu.module.scss'

const ActionMenu = () => {
    return (
        <div className={classes.actionMenu}>
            <svg width="4" height="18" viewBox="0 0 4 18" fill="none">
                <circle cx="2" cy="2" r="2" fill="black" fillOpacity="0.2"/>
                <circle cx="2" cy="9" r="2" fill="black" fillOpacity="0.2"/>
                <circle cx="2" cy="16" r="2" fill="black" fillOpacity="0.2"/>
            </svg>
        </div>
    );
};

export default ActionMenu;