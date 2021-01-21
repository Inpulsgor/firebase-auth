import axios from "axios";

// const config = {
//   baseURL: "http://localhost:4000",
// };

// const instance = axios.create(config);

axios.defaults.baseURL = "http://localhost:4000";

export const getLists = () => axios.get("/lists");

export const createList = (credentials) => axios.post("/lists", credentials);

export const deleteList = (id) => axios.delete(`/lists/${id}`);

export const getListsWithExpand = () =>
  axios.get("/lists?_expand=color&_embed=tasks");

export const updateListTitle = (id, list) => axios.patch(`/lists/${id}`, list);

export const getTasks = () => axios.get("/tasks");

export const createTask = (credentials) => axios.post("/tasks", credentials);

export const getColors = () => axios.get("/colors");
