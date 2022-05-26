import { firebaseAuth } from "../../services/api/firebase";

import loaderSlice from "../loader/loaderSlice";
import categoriesSlice from "../categories/categoriesSlice";
import colorsSlice from "../colors/colorsSlice";
import tasksSlice from "../tasks/tasksSlice";
import sessionSlice from "./sessionSlice";

/*
 * SIGN IN
 */

export const signIn = (email, password) => (dispatch) => {
  dispatch(loaderSlice.actions.loaderActive());

  firebaseAuth
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
      dispatch(sessionSlice.actions.signInSuccess(response));
      dispatch(sessionSlice.actions.clearError());
    })
    .catch((error) => {
      dispatch(sessionSlice.actions.signInError(error.message));
    })
    .finally(() => dispatch(loaderSlice.actions.loaderDisabled()));
};

/*
 * SIGN UP
 */

export const signUp = (email, password) => (dispatch) => {
  dispatch(loaderSlice.actions.loaderActive());

  firebaseAuth
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      dispatch(sessionSlice.actions.signUpSuccess(response));
      dispatch(sessionSlice.actions.clearError());
    })
    .catch((error) => {
      dispatch(sessionSlice.actions.signUpError(error.message));
    })
    .finally(() => dispatch(loaderSlice.actions.loaderDisabled()));
};

/*
 * SIGN OUT
 */

export const logOut = () => (dispatch) => {
  dispatch(loaderSlice.actions.loaderActive());

  firebaseAuth
    .signOut()
    .then(() => {
      dispatch(sessionSlice.actions.signOutSuccess());
      dispatch(sessionSlice.actions.clearError());
      dispatch(categoriesSlice.actions.resetCategories());
      dispatch(colorsSlice.actions.resetColors());
      dispatch(tasksSlice.actions.resetTasks());
    })
    .catch((error) => {
      dispatch(sessionSlice.actions.signOutError(error.message));
    })
    .finally(() => dispatch(loaderSlice.actions.loaderDisabled()));
};
