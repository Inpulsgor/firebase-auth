import { getLists, deleteList } from "../../services/api/api";
import {
  fetchListsRequest,
  fetchListsSuccess,
  fetchListsError,
  deleteListRequest,
  deleteListSuccess,
  deleteListError,
} from "./listsActions";

export const fetchLists = () => (dispatch) => {
  dispatch(fetchListsRequest());

  getLists()
    .then((response) => {
      dispatch(fetchListsSuccess(response.data));
    })
    .catch((error) => dispatch(fetchListsError(error)));
};

export const removeList = (id) => (dispatch) => {
  dispatch(deleteListRequest());

  deleteList(id)
    .then((response) => {
      console.log("detelePostSuccess", response);
      dispatch(deleteListSuccess(id));
    })
    .catch((error) => dispatch(deleteListError(error)));
};
