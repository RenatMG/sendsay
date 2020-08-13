import {LOGIN_ERROR, LOGIN_START, LOGIN_SUCCESS} from "./actions";
import Sendsay from 'sendsay-api';
import Cookies from 'js-cookie'

export function login(formData) {
    return (dispatch) => {
        dispatch(loginStart())

        Cookies.remove('sendsay_session');

        const sendsay = new Sendsay();

        sendsay.login({...formData})
            .then(() => {
                dispatch(loginSuccess(sendsay.session))
            })
            .catch(error => {
                dispatch(loginError(error))
            })

        // renamga@gmail.com
        // ilu8Thupa

    }
}

function loginStart() {
    return {
        type: LOGIN_START
    }
}

function loginError(error) {

    return {
        type: LOGIN_ERROR,
        payload: {
            error
        }
    }
}

function loginSuccess(session) {
    Cookies.set('sendsay_session', session);
    return {
        type: LOGIN_SUCCESS
    }
}

export function autoLogin() {
    return dispatch => {
        const session = Cookies.get('sendsay_session');
        if (session) {
            dispatch(loginStart())
            const sendsay = new Sendsay();
            sendsay.setSessionFromCookie();
            // sendsay.request({action: 'sys.settings.get', list: ['about.id']})
            sendsay.request({action: 'sys.settings.get'})
                .then(() => {
                    dispatch(loginSuccess(sendsay.session))
                })
        }

    }
}

