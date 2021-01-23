import {loginRequest, loginSuccess, loginError} from './authActions';
import api from '../../services/api/api'

export const login = (credentials) => dispatch => {
  dispatch(loginRequest())

  api.login(credentials).then(response => {
    console.log(response);
    dispatch(loginSuccess(response));

  }).catch(error => {
    console.log(error);
    dispatch(loginError(error))
  })
}