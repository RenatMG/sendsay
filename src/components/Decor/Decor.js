import React from 'react';
import classes from './Decor.module.scss'

const Decor = () => {
    return (
        <div className={classes.decor}>
            <div className={classes.circle}/>
            <div className={classes.rectangle}/>
            <div className={classes.circle}/>
            <div className={classes.parallelogram}/>
        </div>
    );
};
export default Decor;