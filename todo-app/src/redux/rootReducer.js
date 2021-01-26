import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

// REDUCERS
import authReducer from "./auth/authReducer";
import loaderReducer from "./loader/loaderReducer";
// import listsReducers from "./lists/listsReducers";
// import ColorsReducers from "./colors/ColorsReducers";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "user", "isAuthenticated"],
};

// ROOT REDUCER
const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  isLoading: loaderReducer,
  // lists: listsReducers,
  // colors: ColorsReducers,
});

export default rootReducer;
