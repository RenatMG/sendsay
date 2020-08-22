import React from 'react';
import classes from './Divider.module.scss'

const Divider = ({marginX = 0, marginY = 0}) => {
    
    return (
        <div className={classes.divider}
             style={{
                 marginTop: marginY, marginBottom: marginY,
                 marginLeft: marginX, marginRight: marginX
             }}>
            <div/>
        </div>
    );
};

export default Divider;