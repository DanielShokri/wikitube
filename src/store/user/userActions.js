import types from "../types";
import userService from "../../services/userService";

const fetchData = (payload, type) => {
  return {
    payload,
    type
  };
};

export const handleUserSignup = user => {
  return async dispatch => {
    try {
      const userSignup = await userService.saveUser(user);
      dispatch(fetchData(userSignup, types.USER_SIGNUP));
      return userSignup;
    } catch (error) {
      throw error;
    }
  };
};

export const handleUserSigning = user => {
  return async dispatch => {
    try {
      const userSignin = await userService.handleUserLogin(user);
      dispatch(fetchData(userSignin, types.USER_LOGIN));
      return userSignin;
    } catch (error) {
      throw error;
    }
  };
};

export const handleUserSearchTerm = term => {
  return async dispatch => {
    try {
      const updatedUser = await userService.saveUserSearch(term);
      dispatch(fetchData(updatedUser, types.SAVE_USER_SEARCH_TERM));
      return updatedUser;
    } catch (error) {
      throw error;
    }
  };
};

export const handleUserLogout = () => {
  return async dispatch => {
    try {
      const logOutUser = await userService.handleLogout();
      dispatch(fetchData(logOutUser, types.USER_LOGOUT));
      return logOutUser;
    } catch (error) {
      throw error;
    }
  };
};
