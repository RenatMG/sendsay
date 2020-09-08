import React, {useContext} from 'react';
import {
    clearActions,
    loadHistory,
    sendRequest,
    sendRequestError,
    setFormat
} from "../../../store/actions/apiConsoleActions";
import {connect} from "react-redux";

const ConnectContext = React.createContext();

export const useConnect = () => {
    return useContext(ConnectContext)
};

const ApiConsoleConnectProvider = (props) => {
    const {apiConsole, sendRequest, clearActions, setFormat, sendRequestError, children, loadHistory} = props
    return (
        <ConnectContext.Provider
            value={{
                apiConsole,
                sendRequest,
                clearActions,
                setFormat,
                sendRequestError,
                loadHistory
            }}>
            {children}
        </ConnectContext.Provider>
    )

};

const mapState = state => {
    return {
        apiConsole: state.apiConsole
    }
};

const actions = {
    sendRequest,
    clearActions,
    setFormat,
    sendRequestError,
    loadHistory
};

export default connect(mapState, actions)(ApiConsoleConnectProvider);