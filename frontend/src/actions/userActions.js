import {
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_LOGIN_REQUEST,
  USER_REG_FAIL,
  USER_REG_REQUEST,
  USER_REG_SUCCESS,USER_REG_LOGOUT
} from '../constants/userConstants'

import {RESET_SHIPPING_ADDRESS} from '../constants/cartConstants'

export const userLoginAction = (email, password) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST })

  fetch('/api/login', {
    // here we used fetch instead of axios to try fetch method also
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data)

      if (data.message) {
        return dispatch({ type: USER_LOGIN_FAIL, payload: data.message })
      } else {
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data })

        localStorage.setItem('userInfo', JSON.stringify(data))
      }
    })
    .catch((error) => {
      console.log(error)
      dispatch({ type: USER_LOGIN_FAIL, payload: error.message })
    })
}

export const userRegAction = (regInfo) => async (dispatch) => {
  dispatch({ type: USER_REG_REQUEST })

  fetch('/api/signup', {
    // here we used fetch instead of axios to try fetch method also
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(regInfo),
  })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data)

      if (data.message) {
        return dispatch({ type: USER_REG_FAIL, payload: data.message })
      } else {
        dispatch({ type: USER_REG_SUCCESS, payload: data })

        // localStorage.setItem('userInfo', JSON.stringify(data))
      }
    })
    .catch((error) => {
      console.log(error)
      dispatch({ type: USER_REG_FAIL, payload: error.message })
    })
}


export const logout = () => async (dispatch) => {
  localStorage.removeItem('userInfo')
  localStorage.removeItem('shippingAddress')
  dispatch({ type: USER_LOGOUT })
  dispatch({ type: USER_REG_LOGOUT })
  dispatch({ type: RESET_SHIPPING_ADDRESS })
}