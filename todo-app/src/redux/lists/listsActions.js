export const ActionType = {
  FETCH_LISTS_REQUEST: "FETCH_LISTS_REQUEST",
  FETCH_LISTS_SUCCESS: "FETCH_LISTS_SUCCESS",
  FETCH_LISTS_ERROR: "FETCH_LISTS_ERROR",
  DELETE_LIST_REQUEST: "DELETE_LIST_REQUEST",
  DELETE_LIST_SUCCESS: "DELETE_LIST_SUCCESS",
  DELETE_LIST_ERROR: "DELETE_LIST_ERROR",
};

// GET
export const fetchListsRequest = () => ({
  type: ActionType.FETCH_LISTS_REQUEST,
});

export const fetchListsSuccess = (lists) => ({
  type: ActionType.FETCH_LISTS_SUCCESS,
  payload: {
    lists,
  },
});

export const fetchListsError = (error) => ({
  type: ActionType.FETCH_LISTS_ERROR,
  payload: {
    error,
  },
});

// DELETE
export const deleteListRequest = () => ({
  type: ActionType.DELETE_LIST_REQUEST,
});

export const deleteListSuccess = (id) => ({
  type: ActionType.DELETE_LIST_REQUEST,
  payload: {
    id,
  },
});

export const deleteListError = (error) => ({
  type: ActionType.DELETE_LIST_REQUEST,
  payload: {
    error,
  },
});
