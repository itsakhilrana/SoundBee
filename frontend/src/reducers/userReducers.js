import {
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_LOGIN_REQUEST,
  USER_REG_FAIL,
  USER_REG_REQUEST,
  USER_REG_SUCCESS,
  USER_RESET_ERROR,
  USER_REG_LOGOUT
} from '../constants/userConstants'

const userLogin = {
  loading: false,
  userInfo: {},
  error: '',
}
export const userLoginReducer = (state = userLogin, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true }
    case USER_LOGIN_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload }
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload }
    case USER_RESET_ERROR:
      return {...state, error:""}
    case USER_LOGOUT:
      return {}
    default:
      return state
  }
}

const userReg = {
  loading: false,
  userInfo: {},
  error: '',
}
export const userRegReducer = (state = userReg, action) => {
  switch (action.type) {
    case USER_REG_REQUEST:
      return { loading: true }
    case USER_REG_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload }
    case USER_REG_FAIL:
      return { loading: false, error: action.payload }
    case USER_RESET_ERROR:
      return {...state, error:""}
      case USER_REG_LOGOUT:
        return {}
    default:
      return state
  }
}
