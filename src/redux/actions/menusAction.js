import {UPDATE_STATE} from "../types/menusType";

export const updateState = (data) => {
    return {
        type: UPDATE_STATE,
        payload: data
    }
};