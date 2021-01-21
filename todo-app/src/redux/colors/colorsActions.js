import { ActionType } from "./colorsTypes";

export const fetchColorsRequest = () => ({
  type: ActionType.FETCH_COLORS_REQUEST,
});

export const fetchColorsSuccess = (colors) => ({
  type: ActionType.FETCH_COLORS_SUCCESS,
  payload: {
    colors,
  },
});

export const fetchColorsError = (error) => ({
  type: ActionType.FETCH_COLORS_ERROR,
  payload: {
    error,
  },
});
