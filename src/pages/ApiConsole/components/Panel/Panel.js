import React, {useEffect, useState} from 'react';
import classes from './Panel.module.scss'
import {connect} from "react-redux";
import {sendRequestError, setEdit, setFormat} from "../../../../store/actions/apiConsoleActions";
import {formatValue} from "../../../../services/jsonHandlers";


const Panel = ({id, title, value, error = false, readOnly = false, minWidth = 'auto', format, edit, setEdit, setFormat, sendRequestError}) => {

    const [state, setState] = useState(value);
    const [localError, setLocalError] = useState(error);

    const inputHandler = (evt) => {
        if (!edit) {
            setEdit(true);
        }
        if (format) {
            setFormat(false)
        }
        if (error || localError) {
            sendRequestError(null)
            setLocalError(false)
        }
        setState(evt.target.value)
    };

    useEffect(() => {
        if (format && !readOnly) {
            try {
                setLocalError(false);
                setState(formatValue(JSON.parse(state)))
            } catch (e) {
                console.log('Request error: ', e.message);
                setLocalError(true)
            }
        }


    }, [format, state, readOnly]);

    useEffect(() => {
        if (!edit) {
            setState(formatValue(value));
        }
        setLocalError(error)
    }, [edit, error, value]);

    return (
        <div className={`${classes.panel} ${localError ? classes.error : ''}`} style={{minWidth}}>
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

const mapState = state => {
    return {
        format: state.apiConsole.format,
        edit: state.apiConsole.edit
    }
};
const actions = {
    setEdit,
    setFormat,
    sendRequestError
};

export default connect(mapState, actions)(Panel);