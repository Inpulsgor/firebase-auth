import axios from "axios";

import { getLists } from "../../services/api/api";
import {
  fetchListsRequest,
  fetchListsSuccess,
  fetchListsError,
} from "./listsActions";

export const fetchLists = () => (dispatch) => {
  dispatch(fetchListsRequest());

  getLists()
    .then((response) => {
      dispatch(fetchListsSuccess(response.lists));
    })
    .catch((error) => dispatch(fetchListsError(error)));
};
