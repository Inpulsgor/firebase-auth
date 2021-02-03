import * as api from "services/api/api";
import tasksSlice from "./tasksSlice";

/*
 * GET TASKS
 */

export const getTasksByID = (id) => (dispatch) => {
  api
    .getTasksByID(id)
    .then((data) => dispatch(tasksSlice.actions.getTasksSuccess(data)))
    .catch((error) => dispatch(tasksSlice.actions.getTasksError(error)));
};

/*
 * CREATE TASK
 */

export const createTask = (id, task) => (dispatch) => {
  dispatch(tasksSlice.actions.loadingActive());

  api
    .createTask(id, task)
    .then((responseID) => {
      dispatch(
        tasksSlice.actions.createTaskSuccess({ id: responseID, ...task })
      );
    })
    .catch((error) => dispatch(tasksSlice.actions.createTaskError(error)))
    .finally(() => dispatch(tasksSlice.actions.loadingDisabled()));
};

/*
 * DELETE TASK
 */

export const removeTask = (taskID) => (dispatch) => {
  dispatch(tasksSlice.actions.loadingActive());

  api
    .deleteTask(taskID)
    .then(() => dispatch(tasksSlice.actions.deleteTaskSuccess(taskID)))
    .catch((error) => dispatch(tasksSlice.actions.deleteTaskError(error)))
    .finally(() => dispatch(tasksSlice.actions.loadingDisabled()));
};
