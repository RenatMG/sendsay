import React from 'react';
import classes from './GitLink.module.scss'

const GitLink = ({onClickHandler, title}) => {
    return (
        <div className={classes.GitLink} onClick={() => onClickHandler(prev => !prev)}>
            {title}
        </div>
    );
};
export default GitLink;