import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  ADD_PAYMENT_METHOD
} from '../constants/cartConstants'
import axios from 'axios'

export const cartAddItem = (id, Qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/product/${id}`)

  console.log(data)
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      description: data.description,
      rating: data.rating,
      qty: Qty,
    },
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const cartRemoveItem = (id) => async (dispatch, getState) => {
 
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const saveAddress = (address) => async (dispatch, getState) => {
  
  dispatch({ type: CART_SAVE_SHIPPING_ADDRESS, payload: address })

  localStorage.setItem('shippingAddress', JSON.stringify(address))
}


export const addPaymentMethod = (method) => async (dispatch, getState) => {
  
  dispatch({ type: ADD_PAYMENT_METHOD, payload: method })

  localStorage.setItem('paymentMethod', JSON.stringify(method))
}
