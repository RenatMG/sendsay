import {SEND_REQUEST_ERROR, SEND_REQUEST_START, SEND_REQUEST_SUCCESS, VALIDATE_REQUEST_ERROR} from "../actions/actions";

const initialState = {
    actions: [
        {
            id: 6445435435435,
            request: {
                "action": "pong"
            },
            response: {
                "request.id": "loasdfsdfading",
                "sublogin": "codeception",
                "ping": 1590062030,
                "account": "codeception",
                "duration": 0.012925,
                "_ehid": "215521.996867202571.1590062030"
            },
        },
        {
            id: 6445434235435435,
            request: {
                "action": "pong"
            },
            response: {
                "request.id": "loasdfghfgfsdfading",
                "sublogin": "codeception",
                "ping": 1590062030,
                "account": "codeception",
                "duration": 0.012925,
                "_ehid": "215521.996867202571.1590062030"
            },
        },
        {
            id: 644543543544545455,
            request: {
                "action": "pong"
            },
            response: {
                "request.id": "loasd354fsdfading",
                "sublogin": "codeception",
                "ping": 1590062030,
                "account": "codeception",
                "duration": 0.012925,
                "_ehid": "215521.996867202571.1590062030"
            },
        },
    ],
    loading: false,
    error: null
}

const apiConsoleReducer = (state = initialState, {type, payload}) => {
    let actions = [...state.actions]

    switch (type) {
        case SEND_REQUEST_START:
            return {
                ...state,
                loading: true
            }
        case SEND_REQUEST_SUCCESS:
            if (actions.length > 19) {
                actions.pop()
            }
            actions = [{...payload}, ...actions];
            return {
                ...state,
                loading: false,
                actions
            }
        case SEND_REQUEST_ERROR:
            return {
                ...state,
                loading: false,
                error: payload.error
            }


        default:
            return {
                ...state
            }
    }
}

export default apiConsoleReducer;