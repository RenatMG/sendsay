import React from 'react';
import classes from './Overlay.module.scss'

const Overlay = ({scroll, scrollHandler}) => {
    return (
        <div className={classes.overlay} onClick={scrollHandler} style={{display: scroll ? 'none' : 'block'}}/>
    );
};

export default Overlay;