import { combineReducers } from "redux";
import { categoriesTypes } from "./categoriesTypes";

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case categoriesTypes.FETCH_CATEGORIES_SUCCESS:
      return payload.lists;

    case categoriesTypes.DELETE_CATEGORY_SUCCESS:
      return state.filter((item) => item.id !== payload.id);

    default:
      return state;
  }
};

const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case categoriesTypes.FETCH_CATEGORIES_REQUEST:
      return true;

    case categoriesTypes.FETCH_CATEGORIES_SUCCESS:
    case categoriesTypes.FETCH_CATEGORIES_ERROR:
      return false;

    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case categoriesTypes.FETCH_CATEGORIES_REQUEST:
    case categoriesTypes.FETCH_CATEGORIES_SUCCESS:
      return null;

    case categoriesTypes.FETCH_CATEGORIES_ERROR:
      return payload.error;

    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  loading: loadingReducer,
  error: errorReducer,
});
