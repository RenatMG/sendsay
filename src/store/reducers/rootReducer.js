import {combineReducers} from 'redux'
import authReducer from "./authReducer";
import apiConsoleReducer from "./apiConsoleReducer";
import firebaseReducer from "./firebaseReducer";

export default combineReducers({
    auth: authReducer,
    apiConsole: apiConsoleReducer,
    firebase: firebaseReducer
})