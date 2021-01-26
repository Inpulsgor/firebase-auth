import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from 'redux-persist';
import thunk from "redux-thunk";
import { logger } from "redux-logger";

import rootReducer from "./rootReducer";

// const authPersistConfig = {
//   key: 'auth',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// MIDDLEWARE
const middleware = [thunk, logger]; // [thunk, ...] <- middleware goes here
const enhancer = applyMiddleware(...middleware);

// STORE
export const store = createStore(rootReducer, composeWithDevTools(enhancer));
export const persistor = persistStore(store);
