import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartAddItem, cartRemoveItem } from '../actions/cartActions'
import { placeOrderAction } from '../actions/orderAction'

import './PlaceorderScreen.css'

const PlaceorderScreen = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const cart = useSelector((state) => state.cart)
  const { cartItems, shippingAddress, paymentMethod } = cart

  const placeOrder = useSelector((state) => state.placeOrder)

  const { loading, error, success, order } = placeOrder
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

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`)
    } else if (!userInfo) {
      history.push('/login?redirect=placeorder')
    } else if (cartItems.length === 0) {
      history.push('/')
    } else if (Object.keys(shippingAddress).length === 0) {
      // empty object always true that's why we checking the length
      history.push('/address')
    }
  }, [success, history])
  const dispatch = useDispatch()

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

      //Also reset the cart items and details here
    }
  }
  const removeItemHandler = (id) => {
    dispatch(cartRemoveItem(id))
  }

  return (
    <div className="PlaceorderScreen">
     
     <div className="PlaceOrder_Container">
     <div className="Order_Items">
        {/* <div className="ShippingPlace">
          <p className="Shipping_Address">Shipping Address</p>

          <div className="Address_DetailsPlace">
            <p>
              {shippingAddress.address} {shippingAddress.city}{' '}
              {shippingAddress.postalCode} {shippingAddress.country}
            </p>
          </div>
        </div> */}
        <div className="CartItem_ContainerPlaceOrder">
          {cartItems.length === 0 ? (
            <p>No item</p>
          ) : (
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
                        ${product.price}
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
          )}
        </div>
      </div>
      <div className="Cart_SummaryMob">
        <p className="Cart_Summar">Cart Summary</p>
        <div className="row">
          <div className="col1">
          <p>PaymentMethod</p>
            <p>Item price</p>
            <p>Shipping price</p>
            <p>Tax price</p>
            <p>Total price</p>
            <br></br>
            <p>Shipping To</p>
          </div>
          <div className="col2">
          <p>{paymentMethod}</p>
            <p>${cart.itemsPrice}</p>
            <p>${cart.shippingPrice}</p>
            <p>${cart.taxPrice}</p>
            <p>${cart.totalPrice}</p>
            <br></br>
            <p>
              {shippingAddress.address}, {shippingAddress.city}, {shippingAddress.postalCode}, {shippingAddress.country}
            </p>
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
      <div className='Bottom_btn'>
        <button onClick={placeOrderHandler}><p>Place Your Order</p>
        <p>${cart.totalPrice}</p></button>
      </div>
    </div>
  )
}

export default PlaceorderScreen
