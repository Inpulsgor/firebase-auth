import { createAction } from "@reduxjs/toolkit";

// GET COLORS

export const getColorsRequest = createAction("colors/GET_COLORS_REQUEST");

export const getColorsSuccess = createAction(
  "colors/GET_COLORS_SUCCESS",
  (colors) => ({
    payload: {
      colors,
    },
  })
);

export const getColorsError = createAction(
  "colors/GET_COLORS_ERROR",
  (error) => ({
    payload: {
      error,
    },
  })
);
