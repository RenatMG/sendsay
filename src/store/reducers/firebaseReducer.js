const initialState = {
    rules: {
        authForm: [],
        apiConsole: []
    }
};

const firebaseReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        default:
            return {
                ...state
            }
    }
};