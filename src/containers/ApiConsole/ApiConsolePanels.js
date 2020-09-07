import React from 'react';
import Panel from "../../components/Panel/Panel";
import Button from "../../components/Button/Button";
import DragResizer from "../../components/DragResizer/DragResizer";
import Divider from "../../components/Divider/Divider";
import {useConsole} from "./ApiConsoleContext";

const ApiConsolePanels = ({action}) => {

    const {loading, error, sendRequest} = useConsole();

    const submitHandler = (evt) => {
        evt.preventDefault()
        sendRequest(evt.target.request.value)
    };

    return (
        <form onSubmit={submitHandler} className="api-console__panels">
            <div className="d-flex">
                <Panel id='request' title='Запрос' value={action.request || ''} error={error}/>
                <DragResizer/>
                <Panel id='response' title='Ответ' value={action.response || ''} error={action.error} readOnly/>
            </div>
            <Divider marginY={15} marginX={-15}/>
            <Button title='Отправить' loading={loading}/>
        </form>
    );
};

export default ApiConsolePanels;