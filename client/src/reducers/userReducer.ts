import { SET_USER } from "../actions/actionTypes";
import { LoginAction } from "./types";

const INITIAL_STATE = {
    user: null,
}

export const userReducer = (state: any = INITIAL_STATE, action: LoginAction) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload.user
            }
        default:
            return state;
    }
}