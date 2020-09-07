import React, {useCallback, useEffect, useState} from 'react';
import './ApiConsole.scss'
import ApiConsoleHeader from "./ApiConsoleHeader";
import Divider from "../../components/Divider/Divider";
import ApiConsoleHistory from "./ApiConsoleHistory";
import ApiConsolePanels from "./ApiConsolePanels";
import {connect} from "react-redux";
import {ApiConsoleProvider} from "./ApiConsoleContext";
import {sendRequestError} from "../../store/actions/apiConsoleActions";

const ApiConsole = ({actions, sendRequestError}) => {

    const [currentActionId, setCurrentActionId] = useState(null);
    // текущий action
    const [action, setAction] = useState({});
    // колбэк для определения текщего action
    const getAction = useCallback(() => {
        if (currentActionId && actions.length) {
            sendRequestError(null);
            return actions.find(action => action.id === +currentActionId)
        }
        return {}
    }, [currentActionId, actions, sendRequestError]);


    useEffect(() => {
        let currentAction = getAction();
        if (currentAction) {
            setAction(currentAction)
        }
    }, [getAction]);


    useEffect(() => {
        if (actions[0]) {
            setCurrentActionId(actions[0].id)
        }
    }, [actions]);

    // console.log(currentActionId)

    return (
        <ApiConsoleProvider>
            <div className='api-console'>
                <ApiConsoleHeader/>
                <Divider/>
                <ApiConsoleHistory setCurrentActionId={setCurrentActionId} action={action}/>
                <Divider/>
                <ApiConsolePanels action={action} id={currentActionId}/>
            </div>
        </ApiConsoleProvider>
    );
};

const mapState = (state) => {
    return {
        actions: state.apiConsole.actions,
    }
}
const actions = {
    sendRequestError
}

export default connect(mapState, actions)(ApiConsole);