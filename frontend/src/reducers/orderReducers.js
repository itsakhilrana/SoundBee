import {
  PLACE_ORDER_FAIL,
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  PAY_ORDER_FAIL,
  PAY_ORDER_REQUEST,
  PAY_ORDER_SUCCESS,
  MY_ORDERS_FAIL,
  MY_ORDERS_REQUEST,
  MY_ORDERS_SUCCESS,
} from '../constants/orderConstants'

const placeOrder = {
  loading: false,
  success: false,
  order: {},
  error: '',
}

export const placeOrderReducer = (state = placeOrder, action) => {
  switch (action.type) {
    case PLACE_ORDER_REQUEST:
      return { loading: true }
    case PLACE_ORDER_SUCCESS:
      return { ...state, loading: false, success: true, order: action.payload }
    case PLACE_ORDER_FAIL:
      return { ...state, error: action.payload }
    default:
      return { ...state }
  }
}

const orderDetails = {
  loading: true,
  success: false,
  order: {},
  error: '',
}

export const orderDetailsReducer = (state = orderDetails, action) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return { loading: true }

    case ORDER_DETAILS_SUCCESS:
      return { ...state, loading: false, success: true, order: action.payload }

    case ORDER_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return { ...state }
  }
}

const payOrder = {
  loading: false,
  paySuccess: false,

  error: '',
}

export const payOrderReducer = (state = payOrder, action) => {
  switch (action.type) {
    case PAY_ORDER_REQUEST:
      return { loading: true }

    case PAY_ORDER_SUCCESS:
      return { ...state, loading: false, paySuccess: true }

    case PAY_ORDER_FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return { ...state }
  }
}

const myOrders = {
  loading: false,
  order: [],
  error: '',
}

export const myOrderReducer = (state = myOrders, action) => {
  switch (action.type) {
    case MY_ORDERS_REQUEST:
      return { loading: true }
    case MY_ORDERS_SUCCESS:
      return { loading: false, order: action.payload }

    case MY_ORDERS_FAIL:
      return { ...state, loading:false, error: action.payload }
    default:
      return { ...state }
  }
}
