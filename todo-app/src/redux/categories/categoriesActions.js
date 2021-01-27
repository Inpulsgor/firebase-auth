import { categoriesTypes } from "./categoriesTypes";

// GET
export const fetchCategoriesRequest = () => ({
  type: categoriesTypes.FETCH_CATEGORIES_REQUEST,
});

export const fetchCategoriesSuccess = (categories) => ({
  type: categoriesTypes.FETCH_CATEGORIES_SUCCESS,
  payload: {
    categories,
  },
});

export const fetchCategoriesError = (error) => ({
  type: categoriesTypes.FETCH_CATEGORIES_ERROR,
  payload: {
    error,
  },
});

// DELETE
export const deleteCategoryRequest = () => ({
  type: categoriesTypes.DELETE_CATEGORY_REQUEST,
});

export const deleteCategorySuccess = (id) => ({
  type: categoriesTypes.DELETE_CATEGORY_SUCCESS,
  payload: {
    id,
  },
});

export const deleteCategoryError = (error) => ({
  type: categoriesTypes.DELETE_CATEGORY_ERROR,
  payload: {
    error,
  },
});
