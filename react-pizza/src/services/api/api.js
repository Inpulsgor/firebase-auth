import axios from "axios";

axios.defaults.baseURL = "http://localhost:3004/";

const getData = () => {
  const request = axios
    .get("/pizzas")
    .then((response) => response)
    .catch((error) => console.log(error));
  return request;
};

const getCategories = () => axios.get("/categories");

export default {
  getData,
  getCategories,
};
