import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  error: null,
  selected: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    getCategoriesSuccess: (state, { payload }) => ({
      ...state,
      items: [...payload],
    }),
    getCategoriesError: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
    createCategorySuccess: (state, { payload }) => ({}),
    createCategoryError: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
    deleteCategorySuccess: (state, { payload }) => ({
      ...state,
      items: state.items.filter((item) => item.id !== payload.id),
    }),
    deleteCategoryError: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
    setSelectedCategory: (state, { payload }) => ({
      ...state,
      selected: payload,
    }),
    resetCategories: (state, { payload }) => initialState,
  },
});

export default categoriesSlice;
