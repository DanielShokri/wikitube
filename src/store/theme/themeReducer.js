import types from "../types";

const INITIAL_STATE = {
  darkTheme: false,
  lightTheme: false,
  blueTheme: false
};

export default function themeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SELECT_LIGHT_THEME:
      return {
        ...state,
        lightTheme: action.payload
      };
    case types.SELECT_DARK_THEME:
      return {
        ...state,
        darkTheme: action.payload
      };
    case types.SELECT_BLUE_THEME:
      return {
        ...state,
        blueTheme: action.payload
      };
    default:
      return state;
  }
}
