import React from 'react';
import Panel from "../../components/Panel/Panel";
import Button from "../../components/Button/Button";

const ApiConsolePanels = () => {

    const submitHandler = (evt) => {
        evt.preventDefault()
        const form = evt.target
        console.log('request',form.request.value)
        console.log('response',form.response.value)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="row">
                <div className='col-6'>
                    <Panel title='Запрос' id={'request'}/>
                </div>
                <div className='col-6'>
                    <Panel title='Ответ' id={'response'}/>
                </div>
            </div>
            <Button title='Отправить'/>
        </form>
    );
};

export default ApiConsolePanels;