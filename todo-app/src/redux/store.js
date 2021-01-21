import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// REDUCERS imports
import listsReducers from "./lists/listsReducers";
import ColorsReducers from "./colors/ColorsReducers";

// MIDDLEWARE
const middleware = [thunk]; // [thunk... , other middleware goes here]
const enhancer = applyMiddleware(...middleware);

// ROOT REDUCER
const rootReducer = combineReducers({
  lists: listsReducers,
  colors: ColorsReducers,
});

// STORE
const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;
