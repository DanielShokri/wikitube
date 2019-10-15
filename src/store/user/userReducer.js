import types from "../types";

const INITIAL_STATE = {
  currentUser: ""
};

export default function videosReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.USER_SIGNUP:
      return {
        ...state,
        currentUser: action.payload
      };
    case types.USER_LOGIN:
      return {
        ...state,
        currentUser: action.payload
      };
    case types.USER_LOGOUT:
      return {
        ...state,
        currentUser: action.payload
      };
    case types.SAVE_USER_SEARCH_TERM:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
}
