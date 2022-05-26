import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// SLICES
import sessionSlice from "./session/sessionSlice";
import loaderSlice from "./loader/loaderSlice";
import categoriesSlice from "./categories/categoriesSlice";
import colorsSlice from "./colors/colorsSlice";
import tasksSlice from "./tasks/tasksSlice";

// PERSIST CONFIG
const authPersistConfig = {
  key: "session",
  storage,
  whitelist: ["token", "user", "isAuthenticated"],
};

// ROOT REDUCER
const rootReducer = combineReducers({
  [sessionSlice.name]: persistReducer(authPersistConfig, sessionSlice.reducer),
  [loaderSlice.name]: loaderSlice.reducer,
  [categoriesSlice.name]: categoriesSlice.reducer,
  [colorsSlice.name]: colorsSlice.reducer,
  [tasksSlice.name]: tasksSlice.reducer,
});

export default rootReducer;
