import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import * as colorsActions from "./colorsActions";

const colorsReducer = createReducer([], {
  [colorsActions.getColorsSuccess]: (state, action) => [
    ...action.payload.colors,
  ],
});

const errorReducer = createReducer(null, {
  [colorsActions.getColorsRequest]: (state, action) => null,
  [colorsActions.getColorsSuccess]: (state, action) => null,
  [colorsActions.getColorsError]: (state, action) => action.payload.error,
});

export default combineReducers({
  items: colorsReducer,
  error: errorReducer,
});
