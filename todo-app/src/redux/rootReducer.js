import { combineReducers } from "redux";

// REDUCERS
import authReducer from "./auth/authReducer";
// import listsReducers from "./lists/listsReducers";
// import ColorsReducers from "./colors/ColorsReducers";

// ROOT REDUCER
const rootReducer = combineReducers({
  auth: authReducer,
  // lists: listsReducers,
  // colors: ColorsReducers,
});

export default rootReducer;
