import {LOGIN_ERROR, LOGIN_START, LOGIN_SUCCESS} from "../actions/actions";

const initialState = {
    isLogin: false,
    formControls: {
        login: {
            id: 'login',
            label: 'Логин',
            type: 'text',
            value: '',
            valid: true,
            error: false,
            validation: {
                required: true,
                login: true
            },
            errorMessage: {
                required: 'Это поле необходимо заполнить',
                login: `Логином может быть как email, так и строка из латинских букв, цифр и подчеркиваний.`
            },
        },
        sublogin: {
            id: 'sublogin',
            label: 'Сублогин',
            type: 'text',
            value: '',
            valid: true,
            error: false,
            validation: {
                login: true
            },
            errorMessage: {
                login: `Логином может быть как email, так и строка из латинских букв, цифр и подчеркиваний.`
            },
            subLabel: 'Опционально'
        },
        password: {
            id: 'password',
            label: 'Пароль',
            type: 'text',
            value: '',
            valid: true,
            error: false,
            validation: {
                required: true,
                password: true
            },
            errorMessage: {
                required: 'Это поле необходимо заполнить',
                password: 'Недопустимые символы для пароля'
            },
        },
    },
    loading: false,
    error: null
}

const authReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case LOGIN_START:
            return {
                ...state,
                loading: true
            }
        case LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                error: payload.error
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isLogin: true
            }

        default:
            return {
                ...state
            }

    }
}
export default authReducer;