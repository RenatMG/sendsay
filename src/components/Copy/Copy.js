import React from 'react';
import classes from './Copy.module.scss'
import {Transition} from "react-transition-group";

const Copy = ({open =true}) => {
    return (
        <Transition in={open} timeout={200}>
            {
                state => {
                    console.log(state)
                   return(
                       <div className={`${classes.Copy} ${state}`}>Скопировано</div>
                   )
                }
            }
        </Transition>
    );
};

export default Copy;