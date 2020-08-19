import React, {useEffect, useState} from 'react';
import classes from './Panel.module.scss'


const Panel = ({id, title}) => {

    const [state, setState] = useState()

    return (
        <div className={classes.panel}>
            <div className={classes.title}>{title}</div>
            <div className={classes.body}>
                <textarea onChange={e => setState(e.target.value)} value={state} name="1" id={id}/>
            </div>
        </div>
    );
};

export default Panel;