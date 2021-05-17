import {loginReducer} from "./loginReducers";
import {combineReducers} from "redux";


export const rootReducer = combineReducers({
    Login: loginReducer
});