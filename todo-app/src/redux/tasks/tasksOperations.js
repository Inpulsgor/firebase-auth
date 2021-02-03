import * as api from "services/api/api";

import {
  getTasksRequest,
  getTasksSuccess,
  getTasksError,
  createTaskRequest,
  createTaskSuccess,
  createTaskError,
  deleteTaskRequest,
  deleteTaskSuccess,
  deleteTaskError,
} from "./tasksActions";

/*
 * GET TASKS
 */

export const getTasks = () => (dispatch) => {
  dispatch(getTasksRequest());

  api
    .getTasks()
    .then((data) => dispatch(getTasksSuccess(data)))
    .catch((error) => dispatch(getTasksError(error)));
};

/*
 * CREATE TASK
 */

export const createTask = (task) => (dispatch) => {
  dispatch(createTaskRequest());

  api
    .createTask(task)
    .then(() => dispatch(createTaskSuccess()))
    .catch((error) => dispatch(createTaskError(error)));
};

/*
 * DELETE TASK
 */

export const removeTask = (taskID) => (dispatch) => {
  dispatch(deleteTaskRequest());

  api
    .deleteTask(taskID)
    .then(() => dispatch(deleteTaskSuccess(taskID)))
    .catch((error) => dispatch(deleteTaskError(error)));
};
