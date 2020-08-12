const initialState = {

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
        subLogin: {
            id: 'subLogin',
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
            type: 'password',
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

        default:
            return {
                ...state
            }

    }
}
export default authReducer;