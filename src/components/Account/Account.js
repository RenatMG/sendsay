import React from 'react';
import classes from './Account.module.scss'
import Dots from "../../svg/Dots";

const Account = ({account, sublogin}) => {

    return (
        <div className={classes.account}>
            <div>{account}</div>
            {
                sublogin &&
                <div>
                  <Dots/>
                    {sublogin}
                </div>
            }

        </div>
    );
};

export default Account;