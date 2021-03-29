import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartAddItem, cartRemoveItem } from '../actions/cartActions'
import { placeOrderAction } from '../actions/orderAction'

import './PlaceorderScreen.css'

const PlaceorderScreen = ({ history }) => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const cart = useSelector((state) => state.cart)
  const { cartItems, shippingAddress, paymentMethod } = cart

  const placeOrder = useSelector((state) => state.placeOrder)

  const { success, order } = placeOrder

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`)
    } 
     else if (!userInfo) {
      history.push('/login?redirect=placeorder')
    }
    else if (cartItems.length === 0) {
      history.push('/')
    }
    else if (Object.keys(shippingAddress).length === 0) {

      history.push('/address')
    }
  }, [success, history])

  // calculations
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }

  let cost = 0
  cartItems.map((product) => {
    cost = product.price * product.qty + cost
  })
  cart.itemsPrice = addDecimals(Number(cost))

  cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)))
  cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 100)

  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2)

  const placeOrderHandler = () => {
    if (!userInfo) {
      history.push('/login?redirect=placeorder')
    } else {
      dispatch(
        placeOrderAction({
          cartItems: cart.cartItems,
          shippingAddress: cart.shippingAddress,
          paymentMethod: cart.paymentMethod,
          itemPrice: cart.itemsPrice,
          shippingPrice: cart.shippingPrice,
          taxPrice: cart.taxPrice,
          totalPrice: cart.totalPrice,
        })
      )

      // Also reset the cart items and details here
    }
  }
  const removeItemHandler = (id) => {
    dispatch(cartRemoveItem(id))
  }

  return (
    <div className="PlaceorderScreen">
      <div className="Order_Items">
        <div className="CartItem_ContainerPlaceOrder">
          {/* {
            cartItems.length === 0 ? <p>No Cart Item</p> : <div>
              {
                cartItems.map((product) => {
                  return (
                    <>
                      <div className="Cart_Card" key={product.product}>
                        <div>
                          <img src={product.image} width="70px" height="70px"></img>
                        </div>
                        <div className="Cart_Breif">
                          <p className="CartProduct_Name">
                            {product.name}{' '}
                            <span className="qty">
                              <select
                                value={product.qty}
                                onChange={(e) => {
                                  dispatch(
                                    cartAddItem(
                                      product.product,
                                      Number(e.target.value)
                                    )
                                  )
                                }}
                              >
                                {[...Array(product.countInStock).keys()].map(
                                  (x) => (
                                    <option key={x + 1} value={x + 1}>
                                      {x + 1}
                                    </option>
                                  )
                                )}
                              </select>
                            </span>
                          </p>
                          <p className="About_Product">{product.description} </p>
    
                          <p className="price">
                            ${product.price}{' '}
                            <span
                              className="removeItem"
                              onClick={() => removeItemHandler(product.product)}
                            >
                              Remove
                            </span>
                          </p>
                        </div>
                      </div>
                    </>
                  )
                })
              }
            </div>
          } */}
        </div>
        <div className="Shipping">
          <p className="Shipping_Address">Shipping Address</p>

          <div className="Address_Details">
            <p>{shippingAddress.address}</p>
            <p>{shippingAddress.city}</p>
            <p>{shippingAddress.postalCode} </p>
            <p>{shippingAddress.country} </p>
          </div>
        </div>
      </div>
      <div className="Cart_Summary">
        <p className="Cart_Summar">Cart Summary</p>
        <div className="row">
          <div className="col1">
            <p>Item price</p>
            <p>Shipping price</p>
            <p>Tax price</p>
            <p>Total price</p>
            <br></br>
            <p>PaymentMethod</p>
          </div>
          <div className="col2">
            <p>${cart.itemsPrice}</p>
            <p>${cart.shippingPrice}</p>
            <p>${cart.taxPrice}</p>
            <p>${cart.totalPrice}</p>
            <br></br>
            <p>{paymentMethod}</p>
          </div>
        </div>
        <button onClick={placeOrderHandler}>Place Order</button>
      </div>
    </div>
  )
}

export default PlaceorderScreen
