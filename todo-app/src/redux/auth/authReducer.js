import { combineReducers } from "redux";
import authTypes from './authTypes'

const user = (state = null, { type, payload }) => {
  switch (type) {
    case authTypes.LOGIN_SUCCESS:
      return payload.response.user

    case authTypes.LOGOUT:
      return null

    default:
      return state
  }
}

const userAuthorized = (state = false, { type, payload }) => {
  switch (type) {
    case authTypes.LOGIN_SUCCESS:
      return true

    case authTypes.LOGOUT:
      return null

    default:
      return state
  }
}

const token = (state = null, { type, payload }) => {
  switch (type) {
    case authTypes.LOGIN_SUCCESS:
      return payload.response.token

    case authTypes.LOGOUT:
      return null

    default:
      return state
  }
}

const error = (state = null, { type, payload }) => {
  switch (type) {
    case authTypes.LOGIN_ERROR:
      return payload.error

    default:
      return state
  }
}

export default combineReducers({
  userAuthorized,
  user,
  token,
  error
});
