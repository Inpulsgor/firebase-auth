import { createAction } from "@reduxjs/toolkit";

export const fetchListsRequest = createAction("fetchLists/FETCH_LISTS_REQUEST");
export const fetchListsSuccess = createAction("fetchLists/FETCH_LISTS_SUCCESS");
export const fetchListsError = createAction("fetchLists/FETCH_LISTS_ERROR");
