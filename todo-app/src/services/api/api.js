import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000",
});

export const token = {
  set(token) {
    instance.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    instance.headers.common.Authorization = '';
  },
};

// AUTORIZATION
export const login = credentials => instance({
  method: "POST",
  url: "/auth/login",
}, credentials);

export const logout = () => instance({
  method: "POST",
  url: "/auth/logout",
});

export const register = credentials => instance({
  method: "POST",
  url: "/auth/register",
}, credentials);

// LISTS REQUESTS
export const getLists = () =>
  instance({
    method: "GET",
    url: "/lists",
  });

export const createList = (credentials) =>
  instance(
    {
      method: "POST",
      url: "/lists",
    },
    credentials
  );

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

// TASKS REQUESTS
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

// COLORS REQUESTS
export const getColors = () =>
  instance({
    method: "GET",
    url: "/colors",
  });
