import React from 'react';
import Cookies from "js-cookie";
import classes from './Account.module.scss'

const Account = () => {

    const account = Cookies.get('sendsay_account');
    const sublogin = Cookies.get('sendsay_sublogin');

    return (
        <div className={classes.account}>
            <div>{account}</div>
            {
                sublogin &&
                <div>
                    <svg className='mx-2' width="3" height="9" viewBox="0 0 3 9" fill="none">
                        <path
                            d="M1.375 8.07812C1.9375 8.07812 2.39062 7.61719 2.39062 7.0625C2.39062 6.5 1.9375 6.04688 1.375 6.04688C0.820312 6.04688 0.359375 6.5 0.359375 7.0625C0.359375 7.61719 0.820312 8.07812 1.375 8.07812ZM1.375 2.07031C1.9375 2.07031 2.39062 1.60938 2.39062 1.05469C2.39062 0.492188 1.9375 0.0390625 1.375 0.0390625C0.820312 0.0390625 0.359375 0.492188 0.359375 1.05469C0.359375 1.60938 0.820312 2.07031 1.375 2.07031Z"
                            fill="black" fillOpacity="0.2"/>
                    </svg>
                    {sublogin}
                </div>
            }

        </div>
    );
};

export default Account;