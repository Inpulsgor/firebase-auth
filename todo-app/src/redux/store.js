import { configureStore } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";

import loaderSlice from "./loader/loaderSlice";

export const store = configureStore({
  reducer: {
    isLoading: loaderSlice.reducer,
  },
});
