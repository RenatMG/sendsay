import React, {useState} from 'react';
import classes from './Resize.module.scss'
import ResizeIn from "../../svg/ResizeIn";
import ResizeOut from "../../svg/ResizeOut";

const Resize = () => {

    const [fullScreen, setFullScreen] = useState(false)

    const resize = () => {
        if (!fullScreen) {
            document.documentElement.requestFullscreen();
            setFullScreen(true)
        } else {
            document.exitFullscreen();
            setFullScreen(false)
        }

    }

    return (
        <div className={classes.resize} onClick={resize}>
            {
                fullScreen
                    ?
                    <ResizeIn/>
                    :
                    <ResizeOut/>
            }
        </div>
    );
};

export default Resize;