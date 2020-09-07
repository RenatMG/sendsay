import React, {useEffect, useState} from 'react';
import classes from './Panel.module.scss'


const Panel = ({id, title, value, error = false, format = false, readOnly = false}) => {

    const [state, setState] = useState(value)

    const inputHandler = (evt) => {
        setState(evt.target.value)
    };

    useEffect(() => {
        const formatValue = (value) => {
            if (value) {
                return format ? JSON.stringify(value, null, 2) : JSON.stringify(value)
            }
            return ''
        };
        setState(formatValue(value));

    }, [value, format]);


    return (
        <div className={`${classes.panel} ${error ? classes.error : ''}`}>
            <div className={classes.title}>{title}</div>
            <div className={classes.body}>
                <textarea
                    readOnly={readOnly}
                    onChange={inputHandler}
                    value={state} name={id} id={id}/>
            </div>
        </div>
    );
};

export default Panel;