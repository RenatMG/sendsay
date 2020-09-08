import React from 'react';
import './ApiConsole.scss'

import ApiConsoleMain from "./components/ApiConsoleMain";
import ApiConsoleContextProvider from "./context/ApiConsoleContext";
import ApiConsoleConnectProvider from "./context/ApiConsoleConnect";


const ApiConsole = () => {
    return (
        <ApiConsoleConnectProvider>
            <ApiConsoleContextProvider>
                <ApiConsoleMain/>
            </ApiConsoleContextProvider>
        </ApiConsoleConnectProvider>
    );
};

export default ApiConsole;