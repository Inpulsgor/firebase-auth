import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  error: null,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    getTasksSuccess: (state, { payload }) => ({
      ...state,
      items: [...payload],
    }),
    getTasksError: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
    createTaskSuccess: (state, { payload }) => ({
      ...state,
      items: [...state.items, payload],
    }),
    createTaskError: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
    deleteTaskSuccess: (state, { payload }) => ({
      ...state,
      items: state.items.filter((item) => item.id !== payload.id),
    }),
    deleteTaskError: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
    resetTasks: (state, { payload }) => initialState,
  },
});

export default tasksSlice;
