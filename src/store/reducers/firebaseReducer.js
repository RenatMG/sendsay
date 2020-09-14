import {FB_CONNECT_ERROR, FB_CONNECT_START, FB_CONNECT_SUCCESS} from "../actions/actions";

const initialState = {
    rules: {
        authFormRules: {},
        apiConsoleRules: {}
    },
    tasks: {
        authFormTask: 'Вам нужно реализовать возможность логина под своим собственным логином/саблогином/паролем.',
        apiConsoleTask: 'Консоль состоит из набора панелей, которые занимают всё свободное пространство окна: Заголовка, Полей запроса-ответа, Истории запросов, Панели с действиям',
    },
    git: 'RenatMG/sendsay',
    loading: false
};

const firebaseReducer = (state = initialState, {type, payload}) => {
    let rules = {...state.rules};
    switch (type) {
        case FB_CONNECT_START:
            return {
                ...state,
                loading: true
            };
        case FB_CONNECT_SUCCESS:
            if (payload.type && payload.data) {
                rules[payload.type] = payload.data
            }
            return {
                ...state,
                rules,
                loading: false
            };
        case FB_CONNECT_ERROR:
            return {
                ...state,
                loading: false
            }
        default:
            return {
                ...state
            }
    }
};

export default firebaseReducer;