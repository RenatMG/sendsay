import React from 'react';
import Panel from "../../components/Panel/Panel";
import Button from "../../components/Button/Button";
import DragResizer from "../../components/DragResizer/DragResizer";
import Divider from "../../components/Divider/Divider";
import {useConsole} from "./ApiConsoleContext";
import FormatButton from "../../components/FormatButton/FormatButton";

const ApiConsolePanels = ({action, id}) => {

    const {loading, error, sendRequest} = useConsole();

    const submitHandler = (evt) => {
        evt.preventDefault();
        sendRequest(evt.target.request.value);
    };

    return (
        <form onSubmit={submitHandler} className="api-console__panels">
            <div className="d-flex">
                <Panel id='request'
                       title='Запрос'
                       value={action.request || ''}
                       format={action.format}
                       error={error}/>
                <DragResizer/>
                <Panel id='response'
                       title='Ответ'
                       value={action.response || ''}
                       format={action.format}
                       error={action.error}
                       readOnly/>
            </div>
            <Divider marginY={15} marginX={-15}/>
            <div className='d-flex justify-content-between'>
                <Button title='Отправить' loading={loading}/>
                <FormatButton id={id}/>
            </div>

        </form>
    );
};

export default ApiConsolePanels;