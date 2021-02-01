import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import * as authActions from "./authActions";

const user = createReducer(null, {
  [authActions.signInSuccess]: (state, action) => action.payload.response.user,
  [authActions.signUpSuccess]: (state, action) => action.payload.response.user,
  [authActions.signOutSuccess]: (state, action) => null,
});

const isAuthenticated = createReducer(false, {
  [authActions.signInSuccess]: (state, action) => true,
  [authActions.signUpSuccess]: (state, action) => true,
  [authActions.signOutSuccess]: (state, action) => false,
});

const token = createReducer(null, {
  [authActions.signInSuccess]: (state, action) =>
    action.payload.response.user.refreshToken,
  [authActions.signUpSuccess]: (state, action) =>
    action.payload.response.user.refreshToken,
  [authActions.signOutSuccess]: (state, action) => null,
});

const error = createReducer(null, {
  [authActions.signInError]: (state, action) => action.payload.error,
  [authActions.signUpError]: (state, action) => action.payload.error,
  [authActions.signOutError]: (state, action) => action.payload.error,
  [authActions.clearError]: (state, action) => null,
});

export default combineReducers({
  isAuthenticated,
  user,
  token,
  error,
});
