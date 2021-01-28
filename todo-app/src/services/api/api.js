import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-todo-app-58350-default-rtdb.firebaseio.com",
});

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

/*
 * CATEGORIES REQUEST
 */
export const getCategories = () => instance.get("/categories.json");
export const createCategory = (data) => instance.post("/categories.json", data);
export const deleteCategory = (id) => instance.delete(`/categories.json/${id}`);
export const updateListTitle = (id, data) =>
  instance.patch(`/categories.json/${id}`, data);

/*
 * TASKS REQUEST
 */
export const getTasks = () => instance.get("/tasks.json");
export const createTask = (data) => instance.post("/tasks.json", data);

/*
 * COLORS REQUEST
 */
export const getColors = () => instance.get("/colors.json");
