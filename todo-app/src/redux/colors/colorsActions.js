import { colorsTypes } from "./colorsTypes";

export const getColorsRequest = () => ({
  type: colorsTypes.GET_COLORS_REQUEST,
});

export const getColorsSuccess = (colors) => ({
  type: colorsTypes.GET_COLORS_SUCCESS,
  payload: {
    colors,
  },
});

export const getColorsError = (error) => ({
  type: colorsTypes.GET_COLORS_ERROR,
  payload: {
    error,
  },
});
