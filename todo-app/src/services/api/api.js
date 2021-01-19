import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";

const getLists = () => axios.get("/lists");

const getTasks = () => axios.get("/tasks");

const getColors = () => axios.get("/colors");

const createList = (credentials) => axios.post("/lists", credentials);

const createTask = (credentials) => axios.post("/tasks", credentials);

const createColor = (credentials) => axios.post("/colors", credentials);

const deleteList = (id) => axios.delete(`/lists/${id}`);

export default {
  getLists,
  getTasks,
  getColors,
  createList,
  createTask,
  createColor,
  deleteList,
};