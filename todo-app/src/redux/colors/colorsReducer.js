import { combineReducers } from "redux";
import { colorsTypes } from "./colorsTypes";

const colorsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case colorsTypes.GET_COLORS_SUCCESS:
      return [...payload.colors];

    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case colorsTypes.GET_COLORS_REQUEST:
    case colorsTypes.GET_COLORS_SUCCESS:
      return null;

    case colorsTypes.GET_COLORS_ERROR:
      return payload.error;

    default:
      return state;
  }
};

export default combineReducers({
  items: colorsReducer,
  error: errorReducer,
});
