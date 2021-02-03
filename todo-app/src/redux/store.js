import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

// REDUCERS
import authReducer from "./auth/authReducer";
import loaderSlice from "./loader/loaderSlice";
import categoriesSlice from "./categories/categoriesSlice";
import tasksReducer from "./tasks/tasksReducer";
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
    [loaderSlice.name]: loaderSlice.reducer,
    [categoriesSlice.name]: categoriesSlice.reducer,
    tasks: tasksReducer,
    colors: colorsReducer,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);
