import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";

const getLists = () => axios.get("/lists");

const getListsWithExpand = () => axios.get("/lists?_expand=color&_embed=tasks");

// const getTasks = () => axios.get("/tasks");

const getColors = () => axios.get("/colors");

const createList = (credentials) => axios.post("/lists", credentials);

// const createTask = (credentials) => axios.post("/tasks", credentials);

// const createColor = (credentials) => axios.post("/colors", credentials);

const deleteList = (id) => axios.delete(`/lists/${id}`);

const updateListTitle = (id, list) => axios.patch(`/lists/${id}`, list);

export default {
  getLists,
  getListsWithExpand,
  getColors,
  createList,
  deleteList,
  updateListTitle,
};

// getTasks,
// createTask,
// createColor,
