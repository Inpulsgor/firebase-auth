import { listsTypes } from "./listsTypes";

// GET
export const fetchListsRequest = () => ({
  type: listsTypes.FETCH_LISTS_REQUEST,
});

export const fetchListsSuccess = (lists) => ({
  type: listsTypes.FETCH_LISTS_SUCCESS,
  payload: {
    lists,
  },
});

export const fetchListsError = (error) => ({
  type: listsTypes.FETCH_LISTS_ERROR,
  payload: {
    error,
  },
});

// DELETE
export const deleteListRequest = () => ({
  type: listsTypes.DELETE_LIST_REQUEST,
});

export const deleteListSuccess = (id) => ({
  type: listsTypes.DELETE_LIST_REQUEST,
  payload: {
    id,
  },
});

export const deleteListError = (error) => ({
  type: listsTypes.DELETE_LIST_REQUEST,
  payload: {
    error,
  },
});
