import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import * as categoriesActions from "./categoriesActions";

/*
 * ------- items: [] -------
 */

const itemsReducer = createReducer([], {
  [categoriesActions.getCategoriesSuccess]: (state, action) => [
    ...action.payload,
  ],
  [categoriesActions.createCategorySuccess]: (state, action) => action.payload,
  [categoriesActions.deleteCategorySuccess]: (state, action) =>
    state.filter((item) => item.id !== action.payload.id),
  [categoriesActions.resetCategories]: (state, action) => [],
});

/*
 * ------- error: null -------
 */

const errorReducer = createReducer(null, {
  [categoriesActions.getCategoriesRequest]: (state, action) => null,
  [categoriesActions.getCategoriesSuccess]: (state, action) => null,
  [categoriesActions.getCategoriesError]: (state, action) => action.payload,
});

/*
 * ------- selected: null -------
 */

const selectedCategoryReducer = createReducer(null, {
  [categoriesActions.setSelectedCategory]: (state, action) => action.payload,
});

export default combineReducers({
  items: itemsReducer,
  error: errorReducer,
  selected: selectedCategoryReducer,
});
