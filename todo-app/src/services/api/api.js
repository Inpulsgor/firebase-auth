import { firebaseDB } from "./firebase";

/*
 * CATEGORIES REQUEST
 */
export const getCategories = async () => {
  const data = [];

  await firebaseDB
    .collection("categories")
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        const category = {
          id: doc.id,
          ...doc.data(),
        };
        data.push(category);
      });
    });

  return data;
};

// export const getCategories = () => instance.get("/categories.json");
// export const createCategory = (data) => instance.post("/categories.json", data);
// export const deleteCategory = (id) => instance.delete(`/categories.json/${id}`);
// export const updateListTitle = (id, data) =>
//   instance.patch(`/categories.json/${id}`, data);

/*
 * TASKS REQUEST
 */
// export const getTasks = () => instance.get("/tasks.json");
// export const createTask = (data) => instance.post("/tasks.json", data);

/*
 * COLORS REQUEST
 */
export const getColors = async () => {
  const data = [];

  await firebaseDB
    .collection("colors")
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        const color = {
          id: doc.id,
          ...doc.data(),
        };
        data.push(color);
      });
    });

  return data;
};

// export const getColors = () => instance.get("/colors.json");
