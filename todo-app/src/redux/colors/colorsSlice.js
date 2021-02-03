import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  error: null,
};

const colorsSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {
    getColorsSuccess: (state, { payload }) => ({
      ...state,
      items: [...payload],
    }),
    getColorsError: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
    resetColors: (state, { payload }) => initialState,
  },
});

export default colorsSlice;
