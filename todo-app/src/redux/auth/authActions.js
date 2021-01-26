import authTypes from "./authTypes";

// SIGN IN
export const signInRequest = () => ({
  type: authTypes.SIGN_IN_REQUEST,
});

export const signInSuccess = (response) => ({
  type: authTypes.SIGN_IN_SUCCESS,
  payload: {
    response,
  },
});

export const signInError = (error) => ({
  type: authTypes.SIGN_IN_ERROR,
  payload: {
    error,
  },
});

// SIGN UP
export const signUpRequest = () => ({
  type: authTypes.SIGN_UP_REQUEST,
});

export const signUpSuccess = (response) => ({
  type: authTypes.SIGN_UP_SUCCESS,
  payload: {
    response,
  },
});

export const signUpError = (error) => ({
  type: authTypes.SIGN_UP_ERROR,
  payload: {
    error,
  },
});

// SIGN OUT
export const signOutSuccess = () => ({
  type: authTypes.SIGN_OUT_SUCCESS,
});

export const signOutError = (error) => ({
  type: authTypes.SIGN_OUT_ERROR,
  payload: {
    error,
  },
});

export const clearError = () => ({
  type: authTypes.CLEAR_ERROR,
});
