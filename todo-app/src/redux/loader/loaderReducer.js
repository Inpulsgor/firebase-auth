import { createReducer } from "@reduxjs/toolkit";
import * as loaderActions from "./loaderActions";

const loaderReducer = createReducer(false, {
  [loaderActions.loaderActive]: (state, action) => true,
  [loaderActions.loaderDisabled]: (state, action) => false,
});

export default loaderReducer;
