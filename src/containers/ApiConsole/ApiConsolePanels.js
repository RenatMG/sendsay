import React from 'react';
import Panel from "../../components/Panel/Panel";
import Button from "../../components/Button/Button";
import DragResizer from "../../components/DragResizer/DragResizer";
import Divider from "../../components/Divider/Divider";


const ApiConsolePanels = () => {

    const submitHandler = (evt) => {
        evt.preventDefault()
        const form = evt.target
        console.log('request', form.request.value)
        console.log('response', form.response.value)
    }

    return (
        <form onSubmit={submitHandler} className="api-console__panels">
            <div className="d-flex">
                <Panel title='Запрос' id={'request'}/>
                <DragResizer/>
                <Panel title='Ответ' id={'response'}/>
            </div>
            <Divider marginY={15} marginX={-15}/>
            <Button title='Отправить'/>
        </form>
    );
};

export default ApiConsolePanels;