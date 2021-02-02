import { createAction } from "@reduxjs/toolkit";

/*
 * ------- GET COLORS -------
 */

export const getColorsRequest = createAction("colors/GET_COLORS_REQUEST");

export const getColorsSuccess = createAction("colors/GET_COLORS_SUCCESS");

export const getColorsError = createAction("colors/GET_COLORS_ERROR");

/*
 * ------- RESET COLORS -------
 */

export const resetColors = createAction("colors/RESET_COLORS");
