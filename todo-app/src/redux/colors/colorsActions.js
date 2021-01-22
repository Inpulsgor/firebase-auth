import { colorsTypes } from "./colorsTypes";

export const fetchColorsRequest = () => ({
  type: colorsTypes.FETCH_COLORS_REQUEST,
});

export const fetchColorsSuccess = (colors) => ({
  type: colorsTypes.FETCH_COLORS_SUCCESS,
  payload: {
    colors,
  },
});

export const fetchColorsError = (error) => ({
  type: colorsTypes.FETCH_COLORS_ERROR,
  payload: {
    error,
  },
});
