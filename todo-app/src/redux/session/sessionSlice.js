import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  token: null,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    signInSuccess: (state, { payload }) => ({
      isAuthenticated: true,
      token: payload.user.refreshToken,
      user: payload.user,
      error: null,
    }),
    signInError: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
    signUpSuccess: (state, { payload }) => ({
      isAuthenticated: true,
      token: payload.user.refreshToken,
      user: payload.user,
      error: null,
    }),
    signUpError: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
    signOutSuccess: (state, { payload }) => initialState,
    signOutError: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
    clearError: (state, { payload }) => ({
      ...state,
      error: null,
    }),
  },
});

export default authSlice;
