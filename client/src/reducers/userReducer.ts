import { LoginAction } from "./types";

const INITIAL_STATE = {
    user: null,
}

export const userReducer = (state: any = INITIAL_STATE, action: LoginAction) => {
    switch (action.type) {
        default:
            return state;
    }
}