import * as api from "../../services/api/api";
import {
  fetchCategoriesRequest,
  fetchCategoriesSuccess,
  fetchCategoriesError,
  deleteCategoryRequest,
  deleteCategorySuccess,
  deleteCategoryError,
} from "./categoriesActions";

export const fetchCategories = () => (dispatch) => {
  dispatch(fetchCategoriesRequest());

  api
    .getCategories()
    .then((response) => {
      dispatch(fetchCategoriesSuccess(response.data));
    })
    .catch((error) => dispatch(fetchCategoriesError(error)));
};

export const removeCategory = (id) => (dispatch) => {
  dispatch(deleteCategoryRequest());

  api
    .deleteCategory(id)
    .then((response) => {
      console.log("detelePostSuccess", response);
      dispatch(deleteCategorySuccess(id));
    })
    .catch((error) => dispatch(deleteCategoryError(error)));
};
