import Cookies from "js-cookie";
import Sendsay from "sendsay-api";
import {
    CLEAR_ERRORS,
    SEND_REQUEST_ERROR,
    SEND_REQUEST_START,
    SEND_REQUEST_SUCCESS,
} from "./actions";

export function sendRequest(value) {
    return dispatch => {

        try {
            let request = JSON.parse(value)
            const session = Cookies.get('sendsay_session');
            if (session) {
                dispatch(sendRequestStart());
                const sendsay = new Sendsay();
                sendsay.setSessionFromCookie();

                sendsay.request(request)
                    .then((response) => {
                        Cookies.set('sendsay_session', sendsay.session);
                        dispatch(sendRequestSuccess(sendsay.requestNumber, request, response))
                    })
                    .catch((error) => {
                        console.log(error)
                        dispatch(sendRequestSuccess(sendsay.requestNumber, request, error, true))
                    })
            }
        } catch (error) {
            const {name, message} = error
            dispatch(sendRequestError({name, message}))
        }


    }
}

function sendRequestStart() {
    return {
        type: SEND_REQUEST_START
    }
}

function sendRequestSuccess(id, request, response, error = false) {
    return {
        type: SEND_REQUEST_SUCCESS,
        payload: {
            id,
            request,
            response,
            error
        }
    }
}

export function sendRequestError(error) {
    return {
        type: SEND_REQUEST_ERROR,
        payload: {
            error
        }
    }
}


