import React, {useEffect, useRef, useState} from 'react';
import Menu from "../../../svg/Menu";
import {Copy} from '../../../components'
import {useConsole} from "../context/ApiConsoleContext";
import {connect} from "react-redux";
import {sendRequestError, setEdit, setFormat} from "../../../store/actions/apiConsoleActions";


const ApiConsoleChip = ({actions, action, sendRequestError, setFormat, setEdit}) => {

    const chipRef = useRef();
    const {scroll, setScroll, menuParamsHandler, copyElementId, setCurrentActionId, scrollActions} = useConsole();
    const [state, setState] = useState({});

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
        setCurrentActionId(chip.id);
        setFormat(false);
        setEdit(false);
        sendRequestError(null);
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


    const setMenuParams = async () => {
        const chip = chipRef.current;
        const {left, width} = state;
        if (chip) {
            if (width + left > window.innerWidth - 50) {
                await scrollActions(chip.parentElement, chip.parentElement.scrollLeft - ((window.innerWidth - 55) - (width + left)))
            } else {
                setCurrentActionId(chip.id);
                setFormat(false);
                setEdit(false);
                sendRequestError(null);
                menuParamsHandler(setParamsHandler());
            }
        }

    };

    const setParamsOnScroll = () => {
        const chip = chipRef.current;
        const {top, left, width} = chip.getBoundingClientRect();
        setState({top, left, width, id: +chip.id});
    };

    useEffect(() => {
        setParamsOnScroll();
    }, [actions, scroll]);

    useEffect(() => {

        const chip = chipRef.current;
        //  const chipParent = chip.parentElement;
        if (chip) {
            setParamsOnScroll();
            chip.parentElement.addEventListener('scroll', setParamsOnScroll)
        }
        return () => {
            chip.parentElement.removeEventListener('scroll', setParamsOnScroll)
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

};
const mapState = state => {
    return {
        actions: state.apiConsole.actions
    }
}
const actions = {
    sendRequestError,
    setFormat,
    setEdit
}

export default connect(mapState, actions)(ApiConsoleChip);

