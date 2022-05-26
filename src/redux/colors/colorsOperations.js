import * as api from "services/api/api";
import colorsSlice from "./colorsSlice";

export const getColors = () => (dispatch) => {
  api
    .getColors()
    .then((data) => dispatch(colorsSlice.actions.getColorsSuccess(data)))
    .catch((error) => dispatch(colorsSlice.actions.getColorsError(error)));
};
