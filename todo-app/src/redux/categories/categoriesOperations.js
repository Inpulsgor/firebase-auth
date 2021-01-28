import * as api from "../../services/api/api";

import {
  getCategoriesRequest,
  getCategoriesSuccess,
  getCategoriesError,
  // createCategoryRequest,
  // createCategorySuccess,
  // createCategoryError,
  // deleteCategoryRequest,
  // deleteCategorySuccess,
  // deleteCategoryError,
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

// export const createCategory = (credentials) => (dispatch) => {
//   dispatch(createCategoryRequest());
//   dispatch(loaderActive());

//   api
//     .createCategory(credentials)
//     .then((response) => dispatch(createCategorySuccess(response.data)))
//     .catch((error) => dispatch(createCategoryError(error)))
//     .finally(() => dispatch(loaderDisabled()));
// };

/*
 * DELETE CATEGORY
 */

// export const removeCategory = (id) => (dispatch) => {
//   dispatch(deleteCategoryRequest());
//   dispatch(loaderActive());

//   api
//     .deleteCategory(id)
//     .then((response) => dispatch(deleteCategorySuccess(id)))
//     .catch((error) => dispatch(deleteCategoryError(error)))
//     .finally(() => dispatch(loaderDisabled()));
// };
