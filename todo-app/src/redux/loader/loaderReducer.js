import loaderTypes from "./loaderTypes";

const loaderReducer = (state = false, { type }) => {
  switch (type) {
    case loaderTypes.SET_LOADER_ACTIVE:
      return true;

    case loaderTypes.SET_LOADER_DISABLED:
      return false;

    default:
      return state;
  }
};

export default loaderReducer;
