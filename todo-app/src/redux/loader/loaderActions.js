import loaderTypes from "./loaderTypes";

// SIGN IN
export const loaderActive = () => ({
  type: loaderTypes.SET_LOADER_ACTIVE,
});

export const loaderDisabled = () => ({
  type: loaderTypes.SET_LOADER_DISABLED,
});
