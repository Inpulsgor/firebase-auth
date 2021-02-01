import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import { logger } from "redux-logger";
import thunk from "redux-thunk";

// REDUCERS
import authReducer from "./auth/authReducer";
import loaderReducer from "./loader/loaderReducer";
import categoriesReducer from "./categories/categoriesReducer";
import colorsReducer from "./colors/colorsReducer";

// PERSIST CONFIG
const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "user", "isAuthenticated"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    isLoading: loaderReducer,
    categories: categoriesReducer,
    colors: colorsReducer,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);
