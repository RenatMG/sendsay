import React, {useCallback, useEffect} from 'react';
import {useConnect} from "../context/ApiConsoleConnect";
import ApiConsoleHeader from "./ApiConsoleHeader";
import ApiConsoleHistory from "./ApiConsoleHistory";
import ApiConsolePanels from "./ApiConsolePanels";
import {Divider} from "../../../components";
import {useConsole} from "../context/ApiConsoleContext";

const ApiConsoleMain = () => {
    const {apiConsole: {actions}, sendRequestError, loadHistory} = useConnect();
    const {currentActionId, setCurrentActionId, setAction} = useConsole();

    // колбэк для определения текщего action
    const getAction = useCallback(() => {
        if (currentActionId && actions.length) {
            // console.log(currentActionId)
            // сброс ошибки в левой панели при переходе надругой чип
            sendRequestError(null);
            return actions.find(action => action.id === +currentActionId)
        }
        return false
    }, [currentActionId, actions, sendRequestError]);

    useEffect(() => {
        let currentAction = getAction();
        if (currentAction) {
            setAction(currentAction)
        }
    }, [getAction, setAction]);


    useEffect(() => {
        if (actions[0]) {
            setCurrentActionId(actions[0].id)
        }
    }, [setCurrentActionId, actions]);

    useEffect(()=>{
        loadHistory();
    }, [loadHistory]);

    return (
        <div className='api-console'>
            <ApiConsoleHeader/>
            <Divider/>
            <ApiConsoleHistory/>
            <Divider/>
            <ApiConsolePanels/>
        </div>
    );
};

export default ApiConsoleMain;