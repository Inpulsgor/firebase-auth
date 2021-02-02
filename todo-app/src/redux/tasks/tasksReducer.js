import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import * as tasksActions from "./tasksActions";

/*
 * ------- items: [] -------
 */

const itemsReducer = createReducer([], {
  [tasksActions.getTasksSuccess]: (state, action) => [...action.payload],
  [tasksActions.createTaskSuccess]: (state, action) => action.payload,
  [tasksActions.deleteTaskSuccess]: (state, action) =>
    state.filter((item) => item.id !== action.payload.id),
  [tasksActions.resetTasks]: (state, action) => [],
});

/*
 * ------- error: null -------
 */

const errorReducer = createReducer(null, {
  [tasksActions.getTasksRequest]: (state, action) => null,
  [tasksActions.deleteTaskSuccess]: (state, action) => null,
  [tasksActions.getTasksError]: (state, action) => action.payload,
});

export default combineReducers({
  items: itemsReducer,
  error: errorReducer,
});
