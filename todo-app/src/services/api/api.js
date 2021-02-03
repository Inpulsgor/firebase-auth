import { firebaseDB } from "./firebase";

const categoriesRef = firebaseDB.collection("categories");
const colorsRef = firebaseDB.collection("colors");

/*
 * CATEGORIES REQUESTS
 */

export const getCategories = async () => {
  let data = [];

  await categoriesRef.get().then((snapshot) => {
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
  return await categoriesRef
    .add(category)
    .then((res) => res.id)
    .catch((error) => console.log(error));
};

export const deleteCategory = async (categoryID) => {
  return await categoriesRef
    .doc(categoryID)
    .delete()
    .then(() => {
      console.log("category deleted");
    })
    .catch((error) => console.log(error));
};

/*
 * TASKS REQUESTS
 */

export const getTasksByID = async (id) => {
  let data = [];

  await categoriesRef
    .doc(id)
    .collection("tasks")
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

export const createTask = async (id, task) => {
  return await categoriesRef
    .doc(id)
    .collection("tasks")
    .add(task)
    .then((res) => res.id)
    .catch((error) => console.log(error));
};

export const deleteTask = async () => {};

/*
 * COLORS REQUESTS
 */

export const getColors = async () => {
  const data = [];

  await colorsRef.get().then((snapshot) => {
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
