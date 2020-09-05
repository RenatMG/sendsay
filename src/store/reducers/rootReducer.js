import {combineReducers} from 'redux'
import authReducer from "./authReducer";
import apiConsoleReducer from "./apiConsoleReducer";

export default combineReducers({
    auth: authReducer,
    apiConsole: apiConsoleReducer
})