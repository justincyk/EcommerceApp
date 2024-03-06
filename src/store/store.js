import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log("type: ", action.type);
  console.log("payload: ", action.payload);
  console.log("currentState: ", store.getState());

  //   next will pass on the action and then all subsequent middleware and reducers will all run
  // Once everything is finally ran, will any code after the next(action) run
  next(action);

  console.log("next state: ", store.getState());
};

// basically like little library helpers that run before an action hits the reducers, it hits the middlewares
const middleWares = [logger];

// spread operater as there can be more than element in middleWares
const composedEnhancers = compose(applyMiddleware(...middleWares));

// root-reducer (combination of reducers) is what we basically only need as a argument for store
// need a root reducer to generate a store
// add logger to see what the state looks like before an action is dispatched, what the action is, and what the state looks like after an action
export const store = createStore(rootReducer, undefined, composedEnhancers);
