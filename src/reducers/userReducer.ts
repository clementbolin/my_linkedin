import { GET_ARTICLES, SET_LOADING, SET_USER } from "../actions/actionTypes";
import { LoginAction } from "./types";

export type UserState = {
  user: any;
  articles: [];
};

const INITIAL_STATE: UserState = {
  user: null,
  articles: [],
};

export const userReducer = (
  state: UserState = INITIAL_STATE,
  action: LoginAction
) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        user: action.payload,
      };
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      };
    default:
      return state;
  }
};
