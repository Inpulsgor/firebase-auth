import { createAction } from "@reduxjs/toolkit";

// CREATE CATEGORY

export const createCategoryRequest = createAction(
  "categories/CREATE_CATEGORY_REQUEST"
);

export const createCategorySuccess = createAction(
  "categories/CREATE_CATEGORY_SUCCESS",
  (category) => ({
    payload: {
      category,
    },
  })
);

export const createCategoryError = createAction(
  "categories/CREATE_CATEGORY_ERROR"
);

// GET CATEGORIES

export const getCategoriesRequest = createAction(
  "categories/GET_CATEGORIES_REQUEST"
);

export const getCategoriesSuccess = createAction(
  "categories/GET_CATEGORIES_SUCCESS",
  (categories) => ({
    payload: {
      categories,
    },
  })
);

export const getCategoriesError = createAction(
  "categories/GET_CATEGORIES_ERROR"
);

// DELETE CATEGORY

export const deleteCategoryRequest = createAction(
  "categories/DELETE_CATEGORY_REQUEST"
);

export const deleteCategorySuccess = createAction(
  "categories/DELETE_CATEGORY_SUCCESS",
  (id) => ({
    payload: {
      id,
    },
  })
);

export const deleteCategoryError = createAction(
  "categories/DELETE_CATEGORY_ERROR"
);
