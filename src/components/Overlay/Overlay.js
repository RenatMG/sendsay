import React from 'react';
import classes from './Overlay.module.scss'
import {useConsole} from "../../containers/ApiConsole/ApiConsoleContext";

const Overlay = () => {
    const {scroll, setScroll} = useConsole();
    return (
        <div className={classes.overlay} onClick={() => setScroll(true)} style={{display: scroll ? 'none' : 'block'}}/>
    );
};

export default Overlay;