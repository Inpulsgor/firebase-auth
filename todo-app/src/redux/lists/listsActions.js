import { createAction } from "@reduxjs/toolkit";

export const ActionType = {
  FETCH_LISTS_REQUEST: "FETCH_LISTS_REQUEST",
  FETCH_LISTS_SUCCESS: "FETCH_LISTS_SUCCESS",
  FETCH_LISTS_ERROR: "FETCH_LISTS_ERROR",
};

// export const fetchListsRequest = createAction(ActionType.FETCH_LISTS_REQUEST);
// export const fetchListsSuccess = createAction(ActionType.FETCH_LISTS_SUCCESS);
// export const fetchListsError = createAction(ActionType.FETCH_LISTS_ERROR);

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
