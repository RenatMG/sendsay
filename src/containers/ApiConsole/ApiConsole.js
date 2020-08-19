import React from 'react';
import './ApiConsole.scss'
import ApiConsoleHeader from "./ApiConsoleHeader";
import Divider from "../../components/Divider/Divider";
import ApiConsoleHistory from "./ApiConsoleHistory";
import ApiConsolePanels from "./ApiConsolePanels";

const ApiConsole = () => {
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

export default ApiConsole;