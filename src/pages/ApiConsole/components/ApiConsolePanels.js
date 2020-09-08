import React from 'react';
import {Panel, Button, DragResizer, Divider} from "../../../components";
import FormatButton from "./FormatButton/FormatButton";
import {useConnect} from "../context/ApiConsoleConnect";
import {useConsole} from "../context/ApiConsoleContext";

const ApiConsolePanels = () => {

    const {apiConsole: {loading, error}, sendRequest} = useConnect();
    const {action} = useConsole();

    const submitHandler = (evt) => {
        evt.preventDefault();
        sendRequest(evt.target.request.value);
    };
    let leftWidth = localStorage.getItem('leftWidth');
    let rightWidth = localStorage.getItem('rightWidth');

    return (
        <form onSubmit={submitHandler} className="api-console__panels">
            <div className="d-flex">
                <Panel id='request'
                       title='Запрос'
                       value={action.request || ''}
                       format={action.format}
                       minWidth={leftWidth}
                       error={error}/>
                <DragResizer/>
                <Panel id='response'
                       title='Ответ'
                       value={action.response || ''}
                       format={true}
                       error={action.error}
                       minWidth={rightWidth}
                       readOnly/>
            </div>
            <Divider marginY={15} marginX={-15}/>
            <div className='d-flex justify-content-between'>
                <Button title='Отправить' loading={loading}/>
                <FormatButton/>
            </div>
        </form>
    );
};

export default ApiConsolePanels;