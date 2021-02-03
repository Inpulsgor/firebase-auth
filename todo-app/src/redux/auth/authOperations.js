import { firebaseAuth } from "../../services/api/firebase";

import { loaderActive, loaderDisabled } from "../loader/loaderActions";
import categoriesSlice from "../categories/categoriesSlice";
import * as colorsActions from "../colors/colorsActions";
import {
  signInRequest,
  signInSuccess,
  signInError,
  signUpRequest,
  signUpSuccess,
  signUpError,
  signOutSuccess,
  signOutError,
  clearError,
} from "./authActions";

/*
 * SIGN IN
 */

export const signIn = (email, password) => (dispatch) => {
  dispatch(signInRequest());
  dispatch(loaderActive());

  firebaseAuth
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
      dispatch(signInSuccess(response));
      dispatch(clearError());
    })
    .catch((error) => {
      dispatch(signInError(error.message));
    })
    .finally(() => dispatch(loaderDisabled()));
};

/*
 * SIGN UP
 */

export const signUp = (email, password) => (dispatch) => {
  dispatch(signUpRequest());
  dispatch(loaderActive());

  firebaseAuth
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      dispatch(signUpSuccess(response));
      dispatch(clearError());
    })
    .catch((error) => {
      dispatch(signUpError(error.message));
    })
    .finally(() => dispatch(loaderDisabled()));
};

/*
 * SIGN OUT
 */

export const logOut = () => (dispatch) => {
  dispatch(loaderActive());

  firebaseAuth
    .signOut()
    .then(() => {
      dispatch(signOutSuccess());
      dispatch(clearError());
      dispatch(categoriesSlice.actions.resetCategories());
      dispatch(colorsActions.resetColors());
    })
    .catch((error) => {
      dispatch(signOutError(error.message));
    })
    .finally(() => dispatch(loaderDisabled()));
};
