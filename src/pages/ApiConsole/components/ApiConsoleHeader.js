import React from 'react';
import {Decor, LogOut, Account, Title, Header, Resize} from "../../../components";

import {connect} from "react-redux";
import {logOut} from "../../../store/actions/authActions";
import Cookies from "js-cookie";


const ApiConsoleHeader = ({logOut}) => {

    const account = Cookies.get('sendsay_account');
    const sublogin = Cookies.get('sendsay_sublogin');

    return (
        <Header>
            <div className='d-flex align-items-center'>
                <Decor/>
                <Title className='ml-4'>API-консолька</Title>
            </div>
            <div className='d-flex align-items-center'>
                <Account account={account} sublogin={sublogin}/>
                <LogOut onClick={logOut}/>
                <Resize/>
            </div>
        </Header>
    );
};
const actions = {
    logOut
}

export default connect(false, actions)(ApiConsoleHeader);