import React from 'react';
import Decor from "../../components/Decor/Decor";
import LogOut from "../../components/LogOut/LogOut";
import Account from "../../components/Account/Account";
import Resize from "../../components/Resize/Resize";
import {connect} from "react-redux";
import {logOut} from "../../store/actions/authActions";
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";

const ApiConsoleHeader = ({logOut}) => {


    const resize = () => {
        console.log('resize')
    }


    return (
        <Header>
            <div className='d-flex align-items-center'>
                <Decor/>
                <Title className='ml-4'>API-консолька</Title>
            </div>
            <div className='d-flex align-items-center'>
                <Account/>
                <LogOut onClick={logOut}/>
                <Resize onClick={resize}/>
            </div>
        </Header>
    );
};
const actions = {
    logOut
}

export default connect(false, actions)(ApiConsoleHeader);