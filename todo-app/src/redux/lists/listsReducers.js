import { combineReducers } from "redux";
import { ActionType } from "./listsActions";

const listsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_LISTS_SUCCESS:
      return payload.lists;

    default:
      return state;
  }
};

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case ActionType.FETCH_LISTS_REQUEST:
      return true;

    case ActionType.FETCH_LISTS_SUCCESS:
    case ActionType.FETCH_LISTS_ERROR:
      return false;

    default:
      return state;
  }
};

export default combineReducers({
  items: listsReducer,
  loading: loadingReducer,
  // error: errorReducer,
});
