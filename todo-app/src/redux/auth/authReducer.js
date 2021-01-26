import { combineReducers } from "redux";
import authTypes from "./authTypes";

const user = (state = null, { type, payload }) => {
  switch (type) {
    case authTypes.SIGN_IN_SUCCESS:
    case authTypes.SIGN_UP_SUCCESS:
      return payload.response.user;

    case authTypes.SIGN_OUT_SUCCESS:
      return null;

    default:
      return state;
  }
};

const isAuthenticated = (state = false, { type }) => {
  switch (type) {
    case authTypes.SIGN_UP_SUCCESS:
    case authTypes.SIGN_IN_SUCCESS:
      return true;

    case authTypes.SIGN_OUT_SUCCESS:
      return false;

    default:
      return state;
  }
};

const token = (state = null, { type, payload }) => {
  switch (type) {
    case authTypes.SIGN_IN_SUCCESS:
    case authTypes.SIGN_UP_SUCCESS:
      return payload.response.user.refreshToken;

    case authTypes.SIGN_OUT_SUCCESS:
      return null;

    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case authTypes.CLEAR_ERROR:
      return null;

    case authTypes.SIGN_IN_ERROR:
    case authTypes.SIGN_UP_ERROR:
    case authTypes.SIGN_OUT_ERROR:
      return payload.error;

    default:
      return state;
  }
};

export default combineReducers({
  isAuthenticated,
  user,
  token,
  error,
});
