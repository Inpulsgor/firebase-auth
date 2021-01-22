import { combineReducers } from "redux";

// REDUCERS
import listsReducers from "./lists/listsReducers";
import ColorsReducers from "./colors/ColorsReducers";

// ROOT REDUCER
const rootReducer = combineReducers({
  lists: listsReducers,
  colors: ColorsReducers,
});

export default rootReducer;
