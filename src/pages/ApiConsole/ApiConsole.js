import React, {useEffect} from 'react';
import './ApiConsole.scss'

import ApiConsoleContextProvider from "./context/ApiConsoleContext";
import ApiConsoleHeader from "./components/ApiConsoleHeader";
import {Divider} from "../../components";
import ApiConsoleHistory from "./components/ApiConsoleHistory";
import ApiConsolePanels from "./components/ApiConsolePanels";
import {connect} from "react-redux";
import {loadHistory} from "../../store/actions/apiConsoleActions";


const ApiConsole = ({loadHistory}) => {
    useEffect(() => {
        loadHistory();
    }, [loadHistory]);
    return (
        <ApiConsoleContextProvider>
            <div className='api-console'>
                <ApiConsoleHeader/>
                <Divider/>
                <ApiConsoleHistory/>
                <Divider/>
                <ApiConsolePanels/>
            </div>
        </ApiConsoleContextProvider>
    );
};
const actions = {
    loadHistory
};
export default connect(false, actions)(ApiConsole);

