import {
  loginRequest,
  loginSuccess,
  loginError,
  signUpRequest,
  signUpSuccess,
  signUpError,
  logout,
} from "./authActions";
import api from "../../services/api/api";

export const login = (credentials) => (dispatch) => {
  dispatch(loginRequest());

  api
    .login(credentials)
    .then((response) => {
      console.log(response);
      dispatch(loginSuccess(response));
    })
    .catch((error) => {
      console.log(error);
      dispatch(loginError(error));
    });
};

export const signUp = (credentials) => (dispatch) => {
  dispatch(signUpRequest());

  api
    .signUp(credentials)
    .then((response) => {
      console.log(response);
      dispatch(signUpSuccess(response));
    })
    .catch((error) => {
      console.log(error);
      dispatch(signUpError(error));
    });
};
