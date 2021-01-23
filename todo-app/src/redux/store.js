import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";

// MIDDLEWARE
const middleware = [thunk]; // [thunk, ...] <- middleware goes here
const enhancer = applyMiddleware(...middleware);

// STORE
export const store = createStore(rootReducer, composeWithDevTools(enhancer));
