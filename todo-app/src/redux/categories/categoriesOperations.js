import * as api from "services/api/api";

import {
  getCategoriesRequest,
  getCategoriesSuccess,
  getCategoriesError,
  createCategoryRequest,
  createCategorySuccess,
  createCategoryError,
  deleteCategoryRequest,
  deleteCategorySuccess,
  deleteCategoryError,
} from "./categoriesActions";

/*
 * GET CATEGORIES
 */

export const getCategories = () => (dispatch) => {
  dispatch(getCategoriesRequest());

  api
    .getCategories()
    .then((data) => dispatch(getCategoriesSuccess(data)))
    .catch((error) => dispatch(getCategoriesError(error)));
};

/*
 * CREATE CATEGORY
 */

export const createCategory = (category) => (dispatch) => {
  dispatch(createCategoryRequest());

  api
    .createCategory(category)
    .then(() => dispatch(createCategorySuccess()))
    .catch((error) => dispatch(createCategoryError(error)));
};

/*
 * DELETE CATEGORY
 */

export const removeCategory = (categoryID) => (dispatch) => {
  dispatch(deleteCategoryRequest());

  api
    .deleteCategory(categoryID)
    .then(() => dispatch(deleteCategorySuccess(categoryID)))
    .catch((error) => dispatch(deleteCategoryError(error)));
};
