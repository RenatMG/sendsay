import React, {createContext, useContext, useState} from 'react';

export const ApiConsoleContext = createContext();
export const useConsole = () => {
    return useContext(ApiConsoleContext)
};

const ApiConsoleContextProvider = props => {
    const {children} = props;
    const [scroll, setScroll] = useState(true);
    const [menuParams, setMenuParams] = useState({});
    const [copyElementId, setCopyElementId] = useState(null);
    const [currentActionId, setCurrentActionId] = useState(null);

    const menuParamsHandler = (params) => {
        setScroll(((menuParams.left === params.left) || menuParams.left < 1) && !scroll);// если то же чип - toggle
        setMenuParams(params)
    };

    const scrollActions = (el, left) => {
        el.scrollTo({
            left,
            behavior: "smooth"
        });
    }

    return (
        <ApiConsoleContext.Provider value={{
            scroll,
            setScroll,
            menuParams,
            copyElementId,
            setCopyElementId,
            currentActionId,
            setCurrentActionId,
            menuParamsHandler,
            scrollActions
        }}>
            {children}
        </ApiConsoleContext.Provider>
    )
}
export default ApiConsoleContextProvider;

