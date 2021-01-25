import { firebaseAuth } from '../../services/firebase/firebase';
import {
  signInRequest,
  signInSuccess,
  signInError,
  signUpRequest,
  signUpSuccess,
  signUpError,
  signOut
} from "./authActions";

// SingIn
export const signIn = (email, password) => (dispatch) => {
  dispatch(signInRequest());

  firebaseAuth.signInWithEmailAndPassword(email, password)
  .then(response => {
    dispatch(signInSuccess(response.user))
  })
  .catch(error => {
    console.log('error.code', error.code);
    console.log('error.message', error.message);
    dispatch(signInError(error))
  })
};

// SignUp
export const signUp = (email, password) => (dispatch) => {
  dispatch(signUpRequest());

  firebaseAuth.createUserWithEmailAndPassword(email, password)
  .then(response => {
    dispatch(signUpSuccess(response.user))
  })
  .catch(error => {
    console.log('error.code', error.code);
    console.log('error.message', error.message);
    dispatch(signUpError(error))
  })
};

// LogOut
export const logOut = () => (dispatch) => {
  firebaseAuth.signOut()
  .then(response => {
    console.log(response);
    dispatch(signOut())
  })
  .catch(error => {
    console.log('error', error)
  })

}