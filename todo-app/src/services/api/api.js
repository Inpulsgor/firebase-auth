import axios from "axios";

// INSTANCE
const instance = axios.create({
  baseURL: "http://localhost:4000",
});

// TOKEN
const token = {
  set(token) {
    instance.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    instance.headers.common.Authorization = "";
  },
};

// AUTHORIZATION REQUESTS
const login = (credentials) =>
  instance(
    {
      method: "POST",
      url: "/auth/login",
    },
    credentials
  );

const logout = () =>
  instance({
    method: "POST",
    url: "/auth/logout",
  });

const signUp = (credentials) =>
  instance(
    {
      method: "POST",
      url: "/auth/register",
    },
    credentials
  );

// LISTS REQUESTS
const getLists = () =>
  instance({
    method: "GET",
    url: "/lists",
  });

const createList = (credentials) =>
  instance(
    {
      method: "POST",
      url: "/lists",
    },
    credentials
  );

const deleteList = (id) =>
  instance({
    method: "DELETE",
    url: `/lists/${id}`,
  });

const getListsWithExpand = () =>
  instance({ method: "GET", url: "/lists?_expand=color&_embed=tasks" });

const updateListTitle = (id, list) =>
  instance(
    {
      method: "PATCH",
      url: `/lists/${id}`,
    },
    list
  );

// TASKS REQUESTS
const getTasks = () =>
  instance({
    method: "GET",
    url: "/tasks",
  });

const createTask = (credentials) =>
  instance(
    {
      method: "POST",
      url: "/tasks",
    },
    credentials
  );

// COLORS REQUESTS
const getColors = () =>
  instance({
    method: "GET",
    url: "/colors",
  });

export default {
  token,
  login,
  logout,
  signUp,
  getLists,
  createList,
  deleteList,
  getListsWithExpand,
  updateListTitle,
  getTasks,
  createTask,
  getColors,
};
