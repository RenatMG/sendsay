import {LOGIN_ERROR, LOGIN_START, LOGIN_SUCCESS, USER_LOGOUT} from "./actions";
import Sendsay from 'sendsay-api';
import Cookies from 'js-cookie'

export function login(formData) {
    return (dispatch) => {
        dispatch(loginStart())

        Cookies.remove('sendsay_session');

        const sendsay = new Sendsay();

        sendsay.login({...formData})
            .then(() => {
                return sendsay.request({action: 'pong'})
            })
            .then(({account, sublogin}) => {
                Cookies.set('sendsay_session', sendsay.session);
                Cookies.set('sendsay_account', account);
                if (formData.sublogin) {
                    Cookies.set('sendsay_sublogin', sublogin);
                }
                dispatch(loginSuccess())
            })
            .catch(error => {
                dispatch(loginError(error))
            })

        // renamga@gmail.com
        // ilu8Thupa

    }
}

function loginStart(autoLogin = false) {
    return {
        type: LOGIN_START,
        payload: {
            loading: autoLogin ? 'autoLoginLoading' : 'loading'
        }
    }
}

function loginError(error, autoLogin = false) {
    // console.log(error)
    return {
        type: LOGIN_ERROR,
        payload: {
            error: autoLogin ? null : error,
            loading: autoLogin ? 'autoLoginLoading' : 'loading'
        }
    }
}

function loginSuccess(autoLogin = false) {
    return {
        type: LOGIN_SUCCESS,
        payload: {
            loading: autoLogin ? 'autoLoginLoading' : 'loading'
        }
    }
}

export function autoLogin() {
    return dispatch => {
        const session = Cookies.get('sendsay_session');
        if (session) {
            dispatch(loginStart(true))
            const sendsay = new Sendsay();
            sendsay.setSessionFromCookie();
            sendsay.request({action: 'pong'})
                .then(() => {
                    Cookies.set('sendsay_session', sendsay.session);
                    dispatch(loginSuccess(true))
                })
                .catch(error => {
                    Cookies.remove('sendsay_session');
                    dispatch(loginError(error, true))
                })
        }

    }
}

export function logOut() {
    Cookies.remove('sendsay_session');
    Cookies.remove('sendsay_account');
    Cookies.remove('sendsay_sublogin');
    return {
        type: USER_LOGOUT
    }
}

