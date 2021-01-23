import authTypes from './authTypes';

export const loginRequest = () => ({
  type: authTypes.LOGIN_REQUEST
})

export const loginSuccess = (response) => ({
  type: authTypes.LOGIN_SUCCESS,
  payload: {
    response
  }
})

export const loginError = (error) => ({
  type: authTypes.LOGIN_ERROR,
  payload: {
    error
  }
})

export const logout = (error) => ({
  type: authTypes.LOGIN_ERROR,
  payload: {
    error
  }
})
