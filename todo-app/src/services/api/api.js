import { firebaseDB } from "./firebase";

/*
 * CATEGORIES REQUESTS
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

export const createCategory = async (category) => {
  return await firebaseDB
    .collection("categories")
    .doc()
    .set(category)
    .then()
    .catch((error) => console.log(error));
};

export const deleteCategory = async (categoryID) => {
  return await firebaseDB
    .collection("categories")
    .doc(categoryID)
    .delete()
    .then(() => {
      console.log("category deleted");
    })
    .catch((error) => console.log(error));
};

// export const getCategories = () => instance.get("/categories.json");
// export const createCategory = (data) => instance.post("/categories.json", data);
// export const deleteCategory = (id) => instance.delete(`/categories.json/${id}`);
// export const updateListTitle = (id, data) =>
//   instance.patch(`/categories.json/${id}`, data);

/*
 * TASKS REQUESTS
 */

// export const getTasks = () => instance.get("/tasks.json");
// export const createTask = (data) => instance.post("/tasks.json", data);

/*
 * COLORS REQUESTS
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
