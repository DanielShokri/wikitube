import types from "../types";

const INITIAL_STATE = {
  videos: [],
  videoId: "",
  wikipediaTerm: []
};

export default function videosReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.USER_INPUT_SEARCH:
      return {
        ...state,
        videos: action.payload
      };
    case types.USER_SELECTED_VIDEO:
      return {
        ...state,
        videoId: action.payload
      };
    case types.FETCH_WIKIPEDIA_TERM:
      return {
        ...state,
        wikipediaTerm: action.payload
      };
    default:
      return state;
  }
}
