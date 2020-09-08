import React from 'react';
import {Header, Scroll} from "../../../components";

import ApiConsoleChip from "./ApiConsoleChip";
import ClearHistory from "./ClearHistory/ClearHistory";
import DropDownMenu from "./DropDownMenu/DropDownMenu";
import Overlay from "./Overlay/Overlay";

import {useConsole} from "../context/ApiConsoleContext";
import {useConnect} from "../context/ApiConsoleConnect";


const ApiConsoleHistory = () => {

    const {scroll} = useConsole();
    const {apiConsole:{actions}} = useConnect();

    return (
        <Header>
            <Scroll scroll={scroll}>

                {
                    actions.map(action => {
                        return (
                            <ApiConsoleChip key={action.id}
                                        action={action}
                            />
                        )
                    })
                }

            </Scroll>
            <DropDownMenu/>
            <ClearHistory/>
            <Overlay/>
        </Header>
    );

};

export default ApiConsoleHistory;

