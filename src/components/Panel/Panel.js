import React, {useState} from 'react';
import classes from './Panel.module.scss'


const Panel = ({id, title}) => {

    const [state, setState] = useState()


    return (
        <div className={classes.panel}>
            <div>{title}</div>
            <textarea onChange={e => setState(e.target.value)} value={state} name="1" id={id} cols="30" rows="10"/>
        </div>
    );
};

export default Panel;