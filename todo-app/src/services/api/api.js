import { firebaseDB } from "./firebase";

/*
 * CATEGORIES REQUESTS
 */

export const getCategories = async () => {
  let data = [];

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

/*
 * TASKS REQUESTS
 */

export const getTasks = async () => {
  const data = [];

  // await firebaseDB
  //   .collection("tasks")
  //   .get()
  //   .then((snapshot) => {
  //     snapshot.forEach((doc) => {
  //       const task = {
  //         id: doc.id,
  //         ...doc.data(),
  //       };
  //       data.push(task);
  //     });
  //   });

  return data;
};

export const createTask = async (task) => {
  return await firebaseDB
    .collection("categories")
    .doc()
    .set(task)
    .then()
    .catch((error) => console.log(error));
};

export const deleteTask = async () => {};

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
