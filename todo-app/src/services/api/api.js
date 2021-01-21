import axios from "axios";

const config = {
  baseURL: "http://localhost:4000",
};

const instance = axios.create(config);

// axios.defaults.baseURL = "http://localhost:4000";

export const getLists = () => instance.get("/lists");

export const createList = (credentials) => instance.post("/lists", credentials);

export const deleteList = (id) => instance.delete(`/lists/${id}`);

export const getListsWithExpand = () =>
  instance.get("/lists?_expand=color&_embed=tasks");

export const updateListTitle = (id, list) =>
  instance.patch(`/lists/${id}`, list);

export const getTasks = () => instance.get("/tasks");

export const createTask = (credentials) => instance.post("/tasks", credentials);

export const getColors = () => instance.get("/colors");
