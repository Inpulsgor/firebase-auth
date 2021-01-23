import {loginRequest, loginSuccess, loginError} from './authActions';

export const login = (credentials) => dispatch => {
  dispatch(loginRequest())
}