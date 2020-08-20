import React, {useEffect, useState} from 'react';
import classes from './ActionChip.module.scss'
import Menu from "../../svg/Menu";


const ActionChip = ({action: {id, title, status = 'success'}, scrollHandler, scroll}) => {


    const [params, setParams] = useState({})

    const setParamsHandler = (el) => {
        const {top, left, width} = el.getBoundingClientRect();
        setParams({top, left, width});
    }

    useEffect(() => {
        let chip = document.getElementById(id);
        setParamsHandler(chip)

        chip.parentElement.addEventListener('scroll', (evt) => {
            setParamsHandler(chip)
        });

        const blockWheel = (evt) => {
            evt.preventDefault();
        };
        if (!scroll) {
            chip.addEventListener('wheel', blockWheel)
        }
        return () => {
            chip.removeEventListener('wheel', blockWheel)
            console.log('renove')
        }

    }, [scroll])


    return (
        <div id={id} className={classes.actionChip} onClick={() => scrollHandler(params)}>
            <div className={`${classes.actionChip__status} ${status === 1 ? 'success' : 'danger'}`}/>
            <div className={classes.actionChip__title}>{title}</div>
            <div className={classes.actionChip__menu}>
                <Menu/>
            </div>
        </div>
    );
};

export default ActionChip;