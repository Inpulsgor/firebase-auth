// import { configureStore } from "@reduxjs/toolkit";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// REDUCERS
import listsReducer from "./lists/listsReducers";
// import loaderSlice from "./loader/loaderSlice";

// ----------------------------------------------------------------

// const store = configureStore({
//   reducer: {
//     lists: listsReducer,
//     isLoading: loaderSlice.reducer,
//   },
//   middleware: [thunk],
// });

// ----------------------------------------------------------------

const rootReducer = combineReducers({
  lists: listsReducer,
});

const middleware = [thunk];
const enhancer = applyMiddleware(...middleware);

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;
