import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: "isLoading",
  initialState: false,
  reducers: {
    loaderActive: (state, { payload }) => true,
    loaderDisabled: (state, { payload }) => false,
  },
});

export default categoriesSlice;
