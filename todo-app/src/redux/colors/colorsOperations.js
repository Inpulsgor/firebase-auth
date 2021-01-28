import * as api from "../../services/api/api";

import {
  getColorsRequest,
  getColorsSuccess,
  getColorsError,
} from "./colorsActions";

export const getColors = () => (dispatch) => {
  dispatch(getColorsRequest());

  api
    .getColors()
    .then((data) => dispatch(getColorsSuccess(data)))
    .catch((error) => dispatch(getColorsError(error)));
};
