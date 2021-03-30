import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailReducer } from './reducers/productReducers'
import { userLoginReducer, userRegReducer } from './reducers/userReducers'
import {cartReducer} from './reducers/cartReducers'
import {placeOrderReducer, orderDetailsReducer, payOrderReducer, myOrderReducer} from './reducers/orderReducers'



const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailReducer,
  userLogin: userLoginReducer,
  userReg: userRegReducer,
  cart:cartReducer,
  placeOrder: placeOrderReducer,
  orderDetails: orderDetailsReducer,
  payOrder:payOrderReducer,
  myOrder : myOrderReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const cartFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}

  const paymentMethodFromStorage = localStorage.getItem('paymentMethod')
  ? JSON.parse(localStorage.getItem('paymentMethod'))
  : ''
const initialState = {
  
  userLogin:{userInfo: userInfoFromStorage},
  userReg:{userInfo: userInfoFromStorage},
  cart:{cartItems:cartFromStorage, shippingAddress:shippingAddressFromStorage, paymentMethod:paymentMethodFromStorage}
}


const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

// to available for all components we use provider from react-redux

export default store
