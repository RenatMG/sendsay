import React, {useState} from 'react';
import Header from "../../components/Header/Header";
import ActionChip from "../../components/ActionChip/ActionChip";
import Scroll from "../../components/Scroll/Scroll";
import ClearHistory from "../../components/ClearHistory/ClearHistory";
import DropDownMenu from "../../components/DropDownMenu/DropDownMenu";
import Overlay from "../../components/Overlay/Overlay";
import {useConsole} from "./ApiConsoleContext";


const ApiConsoleHistory = ({setCurrentActionId, action}) => {

    const {actions, scroll} = useConsole();

    return (
        <Header>
            <Scroll scroll={scroll}>

                {
                    actions.map(action => {
                        return (
                            <ActionChip key={action.id}
                                        action={action}
                                        setCurrentActionId={setCurrentActionId}
                            />
                        )
                    })
                }

            </Scroll>
            <DropDownMenu action={action}/>
            <ClearHistory/>
            <Overlay/>
        </Header>
    );

};

export default ApiConsoleHistory;

