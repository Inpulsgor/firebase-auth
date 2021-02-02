import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import * as colorsActions from "./colorsActions";

const colorsReducer = createReducer([], {
  [colorsActions.getColorsSuccess]: (state, action) => [...action.payload],
  [colorsActions.resetColors]: (state, action) => [],
});

const errorReducer = createReducer(null, {
  [colorsActions.getColorsRequest]: (state, action) => null,
  [colorsActions.getColorsSuccess]: (state, action) => null,
  [colorsActions.getColorsError]: (state, action) => action.payload,
});

export default combineReducers({
  items: colorsReducer,
  error: errorReducer,
});
