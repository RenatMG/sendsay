import React, {useEffect, useState} from 'react';
import classes from './Panel.module.scss'


const Panel = ({id, title, value, error = false, format = false, readOnly = false, minWidth = 'auto'}) => {

    const [state, setState] = useState(value);

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

        try {
            setState(formatValue(value));
            // setLocalError(false)
        } catch (e) {
            // setLocalError(true)
        }

    }, [value, format]);


    // console.log(state)
    // console.log(value)


    return (
        <div className={`${classes.panel} ${error ? classes.error : ''}`} style={{minWidth}}>
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