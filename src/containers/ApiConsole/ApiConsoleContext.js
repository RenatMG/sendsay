import React, {useContext, useState} from 'react'
import {connect} from "react-redux";
import {clearActions, sendRequest, setFormat} from "../../store/actions/apiConsoleActions";

export const ApiConsoleContext = React.createContext();


export const useConsole = () => {
    return useContext(ApiConsoleContext)
};


const mapState = state => {
    return {
        apiConsole: state.apiConsole
    }
};

const actions = {
    sendRequest,
    clearActions,
    setFormat
};

export const ApiConsoleProvider = connect(mapState, actions)(props => {

    const {children, apiConsole, sendRequest, clearActions, setFormat} = props;
    const {actions, loading, error} = apiConsole;

    const [scroll, setScroll] = useState(true);
    const [menuParams, setMenuParams] = useState({});
    const [copyElementId, setCopyElementId] = useState(null);

    const menuParamsHandler = (params) => {
        setScroll(menuParams.left === params.left && !scroll);// если то же чип - toggle
        setMenuParams(params)
    };



    return (
        <ApiConsoleContext.Provider value={{
            actions,
            loading,
            error,
            scroll,
            setScroll,
            menuParams,
            sendRequest,
            copyElementId,
            setCopyElementId,
            clearActions,
            setFormat,
            menuParamsHandler,
        }}>
            {children}
        </ApiConsoleContext.Provider>
    )
})

