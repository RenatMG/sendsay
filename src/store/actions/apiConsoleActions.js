import Cookies from "js-cookie";
import Sendsay from "sendsay-api";
import {
    CLEAR_ACTIONS, DELETE_ACTION, LOAD_HISTORY,
    SEND_REQUEST_ERROR,
    SEND_REQUEST_START,
    SEND_REQUEST_SUCCESS, SET_EDIT, SET_FORMAT,
} from "./actions";

export function sendRequest(request) {
    return dispatch => {

        try {
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

export function clearActions() {
    return {
        type: CLEAR_ACTIONS
    }
}

export function setFormat(format) {
    return {
        type: SET_FORMAT,
        payload: {
            format
        }
    }
}

export function setEdit(edit) {
    return {
        type: SET_EDIT,
        payload: {
            edit
        }
    }
}

export function loadHistory() {
    const actions = localStorage.getItem('actions');
    return {
        type: LOAD_HISTORY,
        payload: {
            actions
        }
    }
}

export function deleteAction(id) {
    return {
        type: DELETE_ACTION,
        payload: {
            id
        }
    }
}