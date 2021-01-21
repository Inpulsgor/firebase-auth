import { combineReducers } from "redux";
import { ActionType } from "./colorsTypes";

const colorsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_COLORS_SUCCESS:
      return payload.colors;

    default:
      return state;
  }
};

const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case ActionType.FETCH_COLORS_REQUEST:
      return true;

    case ActionType.FETCH_COLORS_SUCCESS:
    case ActionType.FETCH_COLORS_ERROR:
      return false;

    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_COLORS_REQUEST:
    case ActionType.FETCH_COLORS_SUCCESS:
      return null;

    case ActionType.FETCH_COLORS_ERROR:
      return payload.error;

    default:
      return state;
  }
};

export default combineReducers({
  items: colorsReducer,
  loading: loadingReducer,
  error: errorReducer,
});
