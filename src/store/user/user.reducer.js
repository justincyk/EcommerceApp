import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

// our reducers in redux receive every single action that gets dispatched and also a result need to return the original state for default
// Initial_state is the initial state that we have to pass in
export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      // we return the original current state so that our code knows that this part of the reducer did not change
      return state;
  }
};
