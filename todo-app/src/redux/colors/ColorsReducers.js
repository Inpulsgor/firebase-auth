import { combineReducers } from "redux";
import { colorsTypes } from "./colorsTypes";

const colorsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case colorsTypes.FETCH_COLORS_SUCCESS:
      return payload.colors;

    default:
      return state;
  }
};

const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case colorsTypes.FETCH_COLORS_REQUEST:
      return true;

    case colorsTypes.FETCH_COLORS_SUCCESS:
    case colorsTypes.FETCH_COLORS_ERROR:
      return false;

    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case colorsTypes.FETCH_COLORS_REQUEST:
    case colorsTypes.FETCH_COLORS_SUCCESS:
      return null;

    case colorsTypes.FETCH_COLORS_ERROR:
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
