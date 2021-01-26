import { firebaseAuth } from "../../services/firebase/firebase";
import { loaderActive, loaderDisabled } from "../loader/loaderActions";
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

// SingIn
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
      dispatch(signInError(error));
    })
    .finally(() => dispatch(loaderDisabled()));
};

// SignUp
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
      dispatch(signUpError(error));
    })
    .finally(() => dispatch(loaderDisabled()));
};

// SignOut
export const logOut = () => (dispatch) => {
  dispatch(loaderActive());

  firebaseAuth
    .signOut()
    .then((response) => {
      console.log("signOut success", response);
      dispatch(signOutSuccess());
      dispatch(clearError());
    })
    .catch((error) => {
      dispatch(signOutError(error));
    })
    .finally(() => dispatch(loaderDisabled()));
};
