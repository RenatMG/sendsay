import React from 'react';
import classes from './Scroll.module.scss'


const Scroll = ({children}) => {
    return (
        <div className={classes.scroll}>
            {children}
        </div>
    );
};

export default Scroll;