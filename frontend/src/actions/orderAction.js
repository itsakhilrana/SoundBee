import {
  PLACE_ORDER_FAIL,
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_REQUEST,
  PAY_ORDER_SUCCESS,PAY_ORDER_REQUEST,PAY_ORDER_FAIL,MY_ORDERS_FAIL,MY_ORDERS_SUCCESS,MY_ORDERS_REQUEST
} from '../constants/orderConstants'

export const placeOrderAction = (order) => async (dispatch, getState) => {
  const {
    userLogin: { userInfo },
  } = getState()

  dispatch({ type: PLACE_ORDER_REQUEST })

  fetch('/api/order', {
    // here we used fetch instead of axios to try fetch method also
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userInfo.token}`,
    },
    body: JSON.stringify(order),
  })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data)

      //   if (data.message) {
      //     return [setValidation_Message(data.message)]
      //   }

      dispatch({ type: PLACE_ORDER_SUCCESS, payload: data })
    })
    .catch((error) => {
      console.log(error)
      dispatch({ type: PLACE_ORDER_FAIL, payload: error })
    })
}

export const orderDetailAction = (id) => async (dispatch, getState) => {
  dispatch({ type: ORDER_DETAILS_REQUEST })

  const {
    userLogin: { userInfo },
  } = getState()

  fetch(`/api/order/${id}`, {
    // here we used fetch instead of axios to try fetch method also
    method: 'Get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userInfo.token}`,
    },
  })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data)

      dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data })
    })
    .catch((error) => {
      console.log(error)
      dispatch({ type: ORDER_DETAILS_FAIL, payload: error })
    })
}

export const payOrderAction = (id, paymentResult) => async (
  dispatch,
  getState
) => {
  dispatch({ type: PAY_ORDER_REQUEST })

  const {
    userLogin: { userInfo },
  } = getState()

  fetch(`/api/order/${id}/pay`, {
    // here we used fetch instead of axios to try fetch method also
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userInfo.token}`,
    },
    body: JSON.stringify(paymentResult),
  })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data)

      dispatch({ type: PAY_ORDER_SUCCESS })
    })
    .catch((error) => {
      console.log(error)
      dispatch({ type: PAY_ORDER_FAIL, payload: error })
    })
}

export const myOrdersAction = () => async (
  dispatch,
  getState
) => {
  dispatch({ type: MY_ORDERS_REQUEST })

  const {
    userLogin: { userInfo },
  } = getState()

  fetch(`/api/myorders`, {
    // here we used fetch instead of axios to try fetch method also
    method: 'Get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userInfo.token}`,
    }
  })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(`myOrders ${data}`)

      dispatch({ type: MY_ORDERS_SUCCESS, payload: data })
    })
    .catch((error) => {
      console.log(error)
      dispatch({ type: MY_ORDERS_FAIL, payload: error })
    })
}
