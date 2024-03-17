export const loggerMiddleware = (store) => (next) => (action) => {
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
