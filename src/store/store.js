import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";

import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

// persistReducer allows us to save data in local storage which in this case is through storage from the redux library
// Configure the persist for persistReducer
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// basically like little library helpers that run before an action hits the reducers, it hits the middlewares
// allows us to only use logger when we are in development mode. Filter(Boolean) allows us to filter out falsey values
const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  thunk,
].filter(Boolean);

const composedEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// spread operater as there can be more than element in middleWares
const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares));

// root-reducer (combination of reducers) is what we basically only need as a argument for store
// need a root reducer to generate a store
// add logger to see what the state looks like before an action is dispatched, what the action is, and what the state looks like after an action
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
