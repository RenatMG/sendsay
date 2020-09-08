import React, {useContext, useState} from 'react';

export const ApiConsoleContext = React.createContext();
export const useConsole = () => {
    return useContext(ApiConsoleContext)
};

const ApiConsoleContextProvider = (props => {
    const {children,} = props;
    const [scroll, setScroll] = useState(true);
    const [menuParams, setMenuParams] = useState({});
    const [copyElementId, setCopyElementId] = useState(null);
    const [currentActionId, setCurrentActionId] = useState(null);
    const [action, setAction] = useState({});



    const menuParamsHandler = (params) => {
        setScroll(((menuParams.left === params.left) || menuParams.left < 1) && !scroll);// если то же чип - toggle
        setMenuParams(params)
    };

    return (
        <ApiConsoleContext.Provider value={{
            scroll,
            setScroll,
            menuParams,
            copyElementId,
            setCopyElementId,
            currentActionId,
            setCurrentActionId,
            action,
            setAction,
            menuParamsHandler,
        }}>
            {children}
        </ApiConsoleContext.Provider>
    )
})
export default ApiConsoleContextProvider;

