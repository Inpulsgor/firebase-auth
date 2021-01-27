import axios from "axios";
import * as firebase from "./firebase";

// INSTANCE
const instance = axios.create({
  baseURL: "https://react-todo-app-58350-default-rtdb.firebaseio.com",
});

// CATEGORIES REQUEST

export const createCategory = (credentials) =>
  instance(
    {
      method: "POST",
      url: "/categories.json",
    },
    credentials
  );

export const getLists = () =>
  instance({
    method: "GET",
    url: "/lists",
  });

export const deleteList = (id) =>
  instance({
    method: "DELETE",
    url: `/lists/${id}`,
  });

export const getListsWithExpand = () =>
  instance({ method: "GET", url: "/lists?_expand=color&_embed=tasks" });

export const updateListTitle = (id, list) =>
  instance(
    {
      method: "PATCH",
      url: `/lists/${id}`,
    },
    list
  );

// TASKS REQUEST
export const getTasks = () =>
  instance({
    method: "GET",
    url: "/tasks",
  });

export const createTask = (credentials) =>
  instance(
    {
      method: "POST",
      url: "/tasks",
    },
    credentials
  );

// COLORS REQUEST
export const getColors = () =>
  instance({
    method: "GET",
    url: "/colors",
  });
