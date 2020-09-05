import React, {useContext, useState} from 'react'
import {connect} from "react-redux";
import {sendRequest} from "../../store/actions/apiConsoleActions";

export const ApiConsoleContext = React.createContext();


export const useConsole = () => {
    return useContext(ApiConsoleContext)
};


const mapState = state => {
    return {
        apiConsole: state.apiConsole
    }
}

const actions = {
    sendRequest,
}

export const ApiConsoleProvider = connect(mapState, actions)(props => {

    const {children, apiConsole, sendRequest} = props;
    const {actions, loading, error} = apiConsole

    const [scroll, setScroll] = useState(true);
    const [menuParams, setMenuParams] = useState({});

    const menuParamsHandler = (params) => {
        setScroll(menuParams.left === params.left && !scroll);// если то же чип - toggle
        setMenuParams(params)
    };



    return (
        <ApiConsoleContext.Provider value={{
            actions,
            loading,
            error,
            sendRequest,
            scroll,
            setScroll,
            menuParamsHandler,
            menuParams
        }}>
            {children}
        </ApiConsoleContext.Provider>
    )
})

