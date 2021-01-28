import * as api from "../../services/api/api";
import { loaderActive, loaderDisabled } from "../loader/loaderActions";
import {
  createCategoryRequest,
  createCategorySuccess,
  createCategoryError,
  fetchCategoriesRequest,
  fetchCategoriesSuccess,
  fetchCategoriesError,
  deleteCategoryRequest,
  deleteCategorySuccess,
  deleteCategoryError,
} from "./categoriesActions";

export const createCategory = (credentials) => (dispatch) => {
  dispatch(createCategoryRequest());
  dispatch(loaderActive());

  api
    .createCategory(credentials)
    .then((response) => dispatch(createCategorySuccess(response.data)))
    .catch((error) => dispatch(createCategoryError(error)))
    .finally(() => dispatch(loaderDisabled()));
};

export const fetchCategories = () => (dispatch) => {
  dispatch(fetchCategoriesRequest());
  dispatch(loaderActive());

  api
    .getCategories()
    .then((response) => dispatch(fetchCategoriesSuccess(response.data)))
    .catch((error) => dispatch(fetchCategoriesError(error)))
    .finally(() => dispatch(loaderDisabled()));
};

export const removeCategory = (id) => (dispatch) => {
  dispatch(deleteCategoryRequest());
  dispatch(loaderActive());

  api
    .deleteCategory(id)
    .then((response) => dispatch(deleteCategorySuccess(id)))
    .catch((error) => dispatch(deleteCategoryError(error)))
    .finally(() => dispatch(loaderDisabled()));
};
