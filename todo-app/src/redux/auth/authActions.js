import { createAction } from "@reduxjs/toolkit";

// SIGN IN

export const signInRequest = createAction("auth/SIGN_IN_REQUEST");
export const signInSuccess = createAction(
  "auth/SIGN_IN_SUCCESS",
  (response) => ({
    payload: {
      response,
    },
  })
);

export const signInError = createAction("auth/SIGN_IN_ERROR");

// SIGN UP

export const signUpRequest = createAction("auth/SIGN_UP_REQUEST");
export const signUpSuccess = createAction(
  "auth/SIGN_UP_SUCCESS",
  (response) => ({
    payload: {
      response,
    },
  })
);

export const signUpError = createAction("auth/SIGN_UP_ERROR");

// SIGN OUT

export const signOutSuccess = createAction("auth/SIGN_OUT_SUCCESS");
export const signOutError = createAction("auth/SIGN_OUT_ERROR");

// CLEAR ERROR

export const clearError = createAction("auth/CLEAR_ERROR");
