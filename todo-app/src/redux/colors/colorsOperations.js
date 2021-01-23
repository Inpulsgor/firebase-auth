import api from "../../services/api/api";

import {
  fetchColorsRequest,
  fetchColorsSuccess,
  fetchColorsError,
} from "./colorsActions";

export const fetchColors = () => (dispatch) => {
  dispatch(fetchColorsRequest());

  api.getColors()
    .then((response) => {
      dispatch(fetchColorsSuccess(response.data));
    })
    .catch((error) => dispatch(fetchColorsError(error)));
};
