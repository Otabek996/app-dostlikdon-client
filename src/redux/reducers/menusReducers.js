import {UPDATE_STATE} from "../types/menusType";

const initialState = {
    modalOpen: false
};

export const menusReducer = (state = initialState, action) => {
    if (action.type === UPDATE_STATE){
        return {
            ...state,
            ...action.payload
        }
    }
    return state;
};