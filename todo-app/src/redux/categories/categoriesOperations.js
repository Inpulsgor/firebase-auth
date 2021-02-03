import * as api from "services/api/api";

import categoriesSlice from "./categoriesSlice";

/*
 * GET CATEGORIES
 */

export const getCategories = () => (dispatch) => {
  api
    .getCategories()
    .then((data) =>
      dispatch(categoriesSlice.actions.getCategoriesSuccess(data))
    )
    .catch((error) =>
      dispatch(categoriesSlice.actions.getCategoriesError(error))
    );
};

/*
 * CREATE CATEGORY
 */

export const createCategory = (category) => (dispatch) => {
  api
    .createCategory(category)
    .then(() => dispatch(categoriesSlice.actions.createCategorySuccess()))
    .catch((error) =>
      dispatch(categoriesSlice.actions.createCategoryError(error))
    );
};

/*
 * DELETE CATEGORY
 */

export const removeCategory = (categoryID) => (dispatch) => {
  api
    .deleteCategory(categoryID)
    .then(() =>
      dispatch(categoriesSlice.actions.deleteCategorySuccess(categoryID))
    )
    .catch((error) =>
      dispatch(categoriesSlice.actions.deleteCategoryError(error))
    );
};
