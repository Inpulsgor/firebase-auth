import { createAction } from "@reduxjs/toolkit";

/*
 * ------- GET TASKS -------
 */

export const getTasksRequest = createAction("tasks/GET_TASKS_REQUEST");
export const getTasksSuccess = createAction("tasks/GET_TASKS_SUCCESS");
export const getTasksError = createAction("tasks/GET_TASKS_ERROR");

/*
 * ------- CREATE TASK -------
 */

export const createTaskRequest = createAction("tasks/CREATE_TASK_REQUEST");
export const createTaskSuccess = createAction("tasks/CREATE_TASK_SUCCESS");
export const createTaskError = createAction("tasks/CREATE_TASK_ERROR");

/*
 * ------- DELETE TASK -------
 */

export const deleteTaskRequest = createAction("tasks/DELETE_TASK_REQUEST");
export const deleteTaskSuccess = createAction(
  "tasks/DELETE_TASK_SUCCESS",
  (id) => ({
    payload: {
      id,
    },
  })
);

export const deleteTaskError = createAction("tasks/DELETE_TASK_ERROR");

/*
 * ------- RESET TASKS -------
 */

export const resetTasks = createAction("tasks/RESET_TASKS");
