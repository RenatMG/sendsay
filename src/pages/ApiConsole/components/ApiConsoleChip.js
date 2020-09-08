import React, {useEffect, useRef, useState} from 'react';
import Menu from "../../../svg/Menu";
import {Copy} from '../../../components'
import {useConsole} from "../context/ApiConsoleContext";


const ApiConsoleChip = ({action}) => {

    const chipRef = useRef();
    const {scroll, setScroll, menuParamsHandler, copyElementId, setCurrentActionId} = useConsole();
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
        if (chip) {
            const {top, left, width} = chip.getBoundingClientRect();
            const newState = {top, left, width, id: +chip.id};
            setState(newState);
            return newState; // для проскролленных элементов
        }
        return state
    };


    const setMenuParams = () => {
        const chip = chipRef.current;
        if (chip) {
            setCurrentActionId(chip.id);
            menuParamsHandler(setParamsHandler());
        }
    };


    useEffect(() => {
        const chip = chipRef.current;
        if (chip) {
            const setParamsOnScroll = () => {
                const {top, left, width} = chip.getBoundingClientRect();
                setState({top, left, width, id: +chip.id});
            };
            setParamsOnScroll();
            chip.parentElement.addEventListener('scroll', setParamsOnScroll)
        }
    }, []);


    const {id, request, error} = action;

    return (
        <>
            {action &&
            <div ref={chipRef} id={id} className='api-console-chip'>
                <div className='api-console-chip__copy'>
                    <div className='api-console-chip__click' onClick={chipHandler}>
                        <div className={`api-console-chip__status ${error ? 'danger' : 'success'}`}/>
                        <div className='api-console-chip__title'>
                            {request.action || 'no-action-name'}
                            {
                                copyElementId === id &&
                                <Copy/>
                            }
                        </div>
                    </div>
                    <div className='api-console-chip__menu' onClick={setMenuParams}>
                        <Menu/>
                    </div>

                </div>

            </div>
            }
        </>
    );

}


export default ApiConsoleChip;

