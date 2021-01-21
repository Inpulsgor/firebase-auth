import { getColors } from "../../services/api/api";

import {
  fetchColorsRequest,
  fetchColorsSuccess,
  fetchColorsError,
} from "./colorsActions";

export const fetchColors = () => (dispatch) => {
  dispatch(fetchColorsRequest());

  getColors()
    .then((response) => {
      dispatch(fetchColorsSuccess(response.data));
    })
    .catch((error) => dispatch(fetchColorsError(error)));
};
