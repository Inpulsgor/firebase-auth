import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import * as categoriesActions from "./categoriesActions";

const itemsReducer = createReducer([], {
  [categoriesActions.getCategoriesSuccess]: (state, action) => [
    ...action.payload.categories,
  ],
  [categoriesActions.createCategorySuccess]: (state, action) => [
    ...state,
    action.payload.category,
  ],
  [categoriesActions.deleteCategorySuccess]: (state, action) =>
    state.filter((item) => item.id !== action.payload.id),
});

const errorReducer = createReducer(null, {
  [categoriesActions.getCategoriesRequest]: (state, action) => null,
  [categoriesActions.getCategoriesSuccess]: (state, action) => null,
  [categoriesActions.getCategoriesError]: (state, action) =>
    action.payload.error,
});

export default combineReducers({
  items: itemsReducer,
  error: errorReducer,
});
