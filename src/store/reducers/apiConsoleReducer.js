import {
    CLEAR_ACTIONS, DELETE_ACTION, LOAD_HISTORY,
    SEND_REQUEST_ERROR,
    SEND_REQUEST_START,
    SEND_REQUEST_SUCCESS, SET_EDIT, SET_FORMAT,
} from "../actions/actions";
import {isEqual} from "underscore";
//
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
                "action": "sys.settings.get"
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
                "action": "sys.settings.get1"
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
    lastRequest: null,
    format: false,
    edit: false,
    loading: false,
    error: null
};

const apiConsoleReducer = (state = initialState, {type, payload}) => {
    let actions = [...state.actions];
    let lastRequest = state.lastRequest

    switch (type) {
        case SEND_REQUEST_START:
            return {
                ...state,
                loading: true,
                error: null
            };
        case SEND_REQUEST_SUCCESS:
            if (payload.request) {
                let actionIdx = actions.findIndex(action => isEqual(action.request, payload.request));
                if (actionIdx !== -1) {
                    actions = [
                        ...actions.slice(0, actionIdx),
                        ...actions.slice(actionIdx + 1)
                    ]
                } else if (actions.length > 14) {
                    actions.pop()
                }
                actions = [{...payload}, ...actions];
                localStorage.setItem('actions', JSON.stringify(actions))
                lastRequest = payload.id
            }
            return {
                ...state,
                loading: false,
                actions,
                lastRequest
            };
        case SEND_REQUEST_ERROR:
            return {
                ...state,
                loading: false,
                error: payload.error
            };
        case DELETE_ACTION:
            actions = actions.filter(action => action.id !== payload.id);
            localStorage.setItem('actions', JSON.stringify(actions));
            return {
                ...state,
                actions
            };
        case CLEAR_ACTIONS:
            localStorage.removeItem('actions');
            return {
                ...state,
                actions: []
            };
        case  SET_FORMAT:
            return {
                ...state,
                format: payload.format
            };
        case SET_EDIT:
            return {
                ...state,
                edit: payload.edit
            };
        case LOAD_HISTORY:
            let storeActions = payload.actions
            try {
                if (storeActions) {
                    actions = JSON.parse(storeActions)
                } else {
                    actions = []
                }
            } catch (e) {
                actions = []
            }
            return {
                ...state,
                actions
            };
        default:
            return {
                ...state
            }
    }
}

export default apiConsoleReducer;