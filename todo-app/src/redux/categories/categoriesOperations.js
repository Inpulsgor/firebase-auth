import * as api from "../../services/api/api";
import { loaderActive, loaderDisabled } from "../../redux/loader/loaderActions";
import { firebaseDB } from "../../services/api/firebase";
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
  dispatch(loaderActive());

  firebaseDB
    .collection("categories")
    .get()
    .then((snapshot) => {
      let data = [];

      snapshot.forEach((doc) => {
        const category = {
          id: doc.id,
          ...doc.data(),
        };
        data.push(category);
      });

      dispatch(getCategoriesSuccess(data));
    })
    .catch((error) => dispatch(getCategoriesError(error)))
    .finally(() => dispatch(loaderDisabled()));
};

/*
 * CREATE CATEGORY
 */

export const createCategory = (credentials) => (dispatch) => {
  dispatch(createCategoryRequest());
  dispatch(loaderActive());

  api
    .createCategory(credentials)
    .then((response) => dispatch(createCategorySuccess(response.data)))
    .catch((error) => dispatch(createCategoryError(error)))
    .finally(() => dispatch(loaderDisabled()));
};

/*
 * DELETE CATEGORY
 */

export const removeCategory = (id) => (dispatch) => {
  dispatch(deleteCategoryRequest());
  dispatch(loaderActive());

  api
    .deleteCategory(id)
    .then((response) => dispatch(deleteCategorySuccess(id)))
    .catch((error) => dispatch(deleteCategoryError(error)))
    .finally(() => dispatch(loaderDisabled()));
};
