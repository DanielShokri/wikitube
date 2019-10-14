import types from "../types";
import wikitubeService from "../../services/wikitubeService";

const fetchData = (payload, type) => {
  return {
    payload,
    type
  };
};

export const handleUserInputYouTube = input => {
  return async dispatch => {
    try {
      const fetchTop5 = await wikitubeService.fetchTopYoutubeVideos(input);
      dispatch(fetchData(fetchTop5, types.USER_INPUT_SEARCH));
      return fetchTop5;
    } catch (error) {
      throw error;
    }
  };
};

export const userSelectVideo = id => ({
  type: types.USER_SELECTED_VIDEO,
  payload: id
});

export const fetchWikipediaTerm = term => {
  return async dispatch => {
    try {
      const fetchWikipediaTerm = await wikitubeService.fetchWikipediaTerm(term);
      dispatch(fetchData(fetchWikipediaTerm, types.FETCH_WIKIPEDIA_TERM));
      return fetchWikipediaTerm;
    } catch (error) {
      throw error;
    }
  };
};
