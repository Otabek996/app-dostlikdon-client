import {loginReducer} from "./loginReducers";
import {combineReducers} from "redux";
import {menusReducer} from "./menusReducers";


export const rootReducer = combineReducers({
    login: loginReducer,
    menus: menusReducer
});