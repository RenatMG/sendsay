import React from 'react';
import './ApiConsole.scss'
import ApiConsoleHeader from "./ApiConsoleHeader";
import Divider from "../../components/Divider/Divider";
import ApiConsoleHistory from "./ApiConsoleHistory";

const ApiConsole = () => {
    return (
        <div>
            <ApiConsoleHeader/>
            <Divider/>
            <ApiConsoleHistory/>
            <Divider/>
        </div>
    );
};

export default ApiConsole;