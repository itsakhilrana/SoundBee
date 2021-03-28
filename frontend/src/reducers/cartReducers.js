import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPPING_ADDRESS, ADD_PAYMENT_METHOD, RESET_SHIPPING_ADDRESS } from '../constants/cartConstants'

const cart = {
  cartItems: [],
  shippingAddress:{},
  paymentMethod:{}
}

export const cartReducer = (state = cart, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload

      const existedItem = state.cartItems.find(
        (x) => x.product === item.product
      )

      if (existedItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existedItem.product ? item : x
          ),
        }
      } else {
        return { ...state, cartItems: [...state.cartItems, item] }
      }

    case CART_REMOVE_ITEM:
      const itemId = action.payload

      return {
        ...state,
        cartItems: state.cartItems.filter((x) => {
          return x.product !== itemId
        }),
      }

    case CART_SAVE_SHIPPING_ADDRESS:
      return {...state, shippingAddress:action.payload}

      case RESET_SHIPPING_ADDRESS:
        return {...state, shippingAddress:{}}


      case ADD_PAYMENT_METHOD:
      return {...state, paymentMethod:action.payload}
    default:
      return state
  }
}



