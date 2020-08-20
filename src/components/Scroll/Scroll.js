import React from 'react';
import classes from './Scroll.module.scss'

const Scroll = ({children, scroll = true}) => {

    return (

        <div className={classes.scroll} style={{pointerEvents: scroll ? 'auto' : 'none'}}>
            {children}
        </div>

    );
};

export default Scroll;

