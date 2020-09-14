import React, {useEffect, useState} from 'react';
import {Button, DragResizer, Divider, GitLink} from "../../../components";
import FormatButton from "./FormatButton/FormatButton";
import {useConsole} from "../context/ApiConsoleContext";
import {connect} from "react-redux";
import {sendRequest, sendRequestError, setEdit, setFormat} from "../../../store/actions/apiConsoleActions";
import Panel from "./Panel/Panel";


const ApiConsolePanels = ({loading, error, actions, lastRequest, sendRequest, setFormat, setEdit, sendRequestError, setOpen}) => {

    const {currentActionId, setCurrentActionId, scrollActions} = useConsole();
    const [request, setRequest] = useState('');
    const [response, setResponse] = useState('');
    const [responseError, setResponseError] = useState(false);


    const submitHandler = (evt) => {
        evt.preventDefault();
        const chips = document.getElementById('scrollActions');
        if (chips.scrollLeft > 0) {
            scrollActions(chips, 0);
        }
        try {
            let request = JSON.parse(evt.target.request.value);
            sendRequest(request);
            setFormat(false);
            setEdit(false);
            setCurrentActionId(null);
        } catch (e) {
            const {name, message} = e;
            console.log('Request error: ', e.message);
            sendRequestError({name, message});
        }


    };
    let leftWidth = localStorage.getItem('leftWidth');
    let rightWidth = localStorage.getItem('rightWidth');

    useEffect(() => {
        let action = null;
        const requestId = currentActionId || lastRequest;
        if (actions && actions.length) {
            action = actions.find(action => action.id === +requestId);
        }
        if (action) {
            setRequest(action.request);
            setResponse(action.response);
            setResponseError(action.error);
        } else {
            setRequest('');
            setResponse('');
            setResponseError(false);
        }

    }, [lastRequest, currentActionId, actions]);


    return (

        <form onSubmit={submitHandler} className="api-console__panels">
            <div className="d-flex">
                <Panel id='request'
                       title='Запрос'
                       value={request}
                       minWidth={leftWidth}
                       error={error}/>
                <DragResizer/>
                <Panel id='response'
                       title='Ответ'
                       value={response}
                       error={responseError}
                       minWidth={rightWidth}
                       readOnly/>
            </div>
            <Divider marginY={15} marginX={-15}/>
            <div className='d-flex justify-content-between'>
                <Button title='Отправить' loading={loading}/>
                <GitLink
                    title='@link-to-your-github'
                    onClickHandler={setOpen}
                />
                <FormatButton
                    setFormat={setFormat}
                />
            </div>
        </form>

    );
};
const mapState = state => {

    return {
        loading: state.apiConsole.loading,
        error: state.apiConsole.error,
        actions: state.apiConsole.actions,
        lastRequest: state.apiConsole.lastRequest,
    }
};
const actions = {
    sendRequest,
    setFormat,
    setEdit,
    sendRequestError
};

export default connect(mapState, actions)(ApiConsolePanels);