import React from 'react';
import {Header, Scroll} from "../../../components";
import ApiConsoleChip from "./ApiConsoleChip";
import ClearHistory from "./ClearHistory/ClearHistory";
import DropDownMenu from "./DropDownMenu/DropDownMenu";
import Overlay from "./Overlay/Overlay";
import {useConsole} from "../context/ApiConsoleContext";
import {connect} from "react-redux";

const ApiConsoleHistory = ({actions}) => {

    const {scroll} = useConsole();

    return (
        <Header>
            <Scroll scroll={scroll}>
                {
                    actions.map(action => {
                        return (
                            <ApiConsoleChip key={action.id} action={action}/>
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

const mapState = state => {
    return {
        actions: state.apiConsole.actions
    }
};

export default connect(mapState)(ApiConsoleHistory);

