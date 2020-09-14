import React, {useEffect, useState} from 'react';
import './ApiConsole.scss'
import ApiConsoleContextProvider from "./context/ApiConsoleContext";
import ApiConsoleHeader from "./components/ApiConsoleHeader";
import {Divider} from "../../components";
import ApiConsoleHistory from "./components/ApiConsoleHistory";
import ApiConsolePanels from "./components/ApiConsolePanels";
import {connect} from "react-redux";
import {loadHistory} from "../../store/actions/apiConsoleActions";
import {Transition} from "react-transition-group";
import Rules from "../../features/Rules/Rules";
import Page from "../../layouts/Page/Page";

const ApiConsole = ({loadHistory}) => {

    const [open, setOpen] = useState(false);

    useEffect(() => {
        loadHistory();
    }, [loadHistory]);

    const title = 'API-консолька';

    return (
        <Page title={title}>
            <ApiConsoleContextProvider>
                <Transition in={open} timeout={0}>
                    {
                        state => {
                            return (
                                <>
                                    <div className={`api-console ${state}`}>
                                        <ApiConsoleHeader/>
                                        <Divider/>
                                        <ApiConsoleHistory/>
                                        <Divider/>
                                        <ApiConsolePanels setOpen={setOpen}/>
                                    </div>
                                    <Rules
                                        transition={state}
                                        onClickHandler={setOpen}
                                        title='API-консолька'
                                        type='apiConsole'/>
                                </>
                            )
                        }
                    }
                </Transition>
            </ApiConsoleContextProvider>
        </Page>
    );
};
const actions = {
    loadHistory
};
export default connect(false, actions)(ApiConsole);

