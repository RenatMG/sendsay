import React from 'react';
import classes from './Input.module.scss';

const Input = ({control, inputHandler}) => {
    const {id, label, subLabel, type, error, value} = control;

    return (
        <div className={`${classes.Input} ${error ? classes.Input__error : ''}`}>

            {
                label &&
                <div className={classes.Input__label}>
                    <label htmlFor={id}>{label}</label>
                    {
                        subLabel &&
                        <small>{subLabel}</small>
                    }
                </div>
            }

            <input type={type || 'text'}
                   className={classes.Input__control}
                   id={id}
                   onChange={inputHandler}
                   value={value}
            />
        </div>
    );
};

export default Input;