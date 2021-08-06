import { SET_USER } from "../actions/actionTypes";
import { LoginAction } from "./types";

export type UserState = {
    user: any
}

const INITIAL_STATE: UserState = {
    user: null,
}

export const userReducer = (state: UserState = INITIAL_STATE, action: LoginAction) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload  
            }
        default:
            return state;
    }
}
