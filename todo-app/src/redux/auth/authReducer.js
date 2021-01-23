import { combineReducers } from "redux";
import authTypes from './authTypes'

const user = (state = {}, { type, payload }) => {
  switch (type) {
    case authTypes.LOGIN_SUCCESS:
      return payload.response.user

    default:
      return state
  }
}

const token = (state = null, { type, payload }) => {
  switch (type) {
    case authTypes.LOGIN_SUCCESS:
      return payload.response.token

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
  user,
  token,
  error
});
