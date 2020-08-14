import React from 'react';
import classes from './Title.module.scss'

const Title = ({children, className = '', size = 'lg'}) => {


    return (
        <div className={`${classes.title} ${size} ${className}`}>
            {children}
        </div>
    );
};

export default Title;