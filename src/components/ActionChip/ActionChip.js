import React, {useCallback, useContext, useEffect, useRef, useState} from 'react';
import classes from './ActionChip.module.scss'
import Menu from "../../svg/Menu";
import {useConsole} from "../../containers/ApiConsole/ApiConsoleContext";
import Copy from "../Copy/Copy";


const ActionChip = ({action, setCurrentActionId}) => {

    const chipRef = useRef();
    const {scroll, setScroll, actions, menuParamsHandler} = useConsole();
    const [state, setState] = useState({});

    const scrollActions = (el, left) => {
        el.scrollTo({
            left,
            behavior: "smooth"
        });
    };

    const chipHandler = () => {
        const {left, width} = state;
        const chip = chipRef.current;
        if (width + left > window.innerWidth - 50) {
            scrollActions(chip.parentElement, chip.parentElement.scrollLeft - ((window.innerWidth - 55) - (width + left)))
        } else if (left < 25) {
            let offset = chip.parentElement.scrollLeft + left - 20
            scrollActions(chip.parentElement, offset)
        }
        if (!scroll) {
            setScroll(true)
        }
        setCurrentActionId(chip.id)
    };

    const setParamsHandler = () => {
        const chip = chipRef.current;
        const {top, left, width} = chip.getBoundingClientRect();
        const newState = {top, left, width, id: +chip.id};
        setState(newState);
        return newState; // для проскролленных элементов
    };


    const setMenuParams = () => {
        const chip = chipRef.current;
        setCurrentActionId(chip.id);
        menuParamsHandler(setParamsHandler());
    };

    useEffect(() => {
        const chip = chipRef.current;
        if (chip) {
            setParamsHandler();
        }
    }, [actions, scroll]);


    const {id, request, error} = action;

    return (
        <>
            {action &&
            <div ref={chipRef} id={id} className={classes.actionChip}>
                <div className={classes.actionChip__click} onClick={chipHandler}>
                    <div className={`${classes.actionChip__status} ${error ? 'danger' : 'success'}`}/>
                    <div className={classes.actionChip__title}>{request.action}
                        <Copy/>
                    </div>

                </div>
                <div className={classes.actionChip__menu} onClick={setMenuParams}>
                    <Menu/>
                </div>
            </div>
            }
        </>
    );

}


export default ActionChip;

