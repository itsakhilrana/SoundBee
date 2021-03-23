import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { orderDetailAction } from '../actions/orderAction'

import './OrderScreen.css'

export const OrderScreen = ({ history, match }) => {
  const orderDetails = useSelector((state) => state.orderDetails)
  const { order, loading, error, success } = orderDetails
  //   const {
  //     shippingAddress,
  //     user,
  //     cartItems: orderItems,
  //     _id: orderId,
  //     paymentMethod,
  //     itemsPrice,
  //     shippingPrice,
  //     taxPrice,
  //     totalPrice,
  //   } = order

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(orderDetailAction(match.params.id))
  }, [history])

  const paymentHandler = () => {}
  return (
    <div>
      <div className="OrderScreen">
        {loading ? (
          <strong>Loading</strong>
        ) : error ? (
          <strong>{error}</strong>
        ) : (
          <>
            <div className="Order_Items">
              <div className="CartItem_ContainerOrder">
                {order.cartItems.map((product) => {
                  return (
                    <>
                      <div className="orderCart_Card" key={product.product}>
                        <div>
                          <img
                            src={product.image}
                            width="70px"
                            height="70px"
                          ></img>
                        </div>
                        <div className="orderCart_Breif">
                          <p className="orderProduct_Name">
                            {product.name}{' '}
                            <span className="orderQty">Qty {product.qty}</span>
                          </p>

                          <p className="orderProduct">{product.description} </p>

                          <p className="orderPrice">${product.price} </p>
                        </div>
                      </div>
                    </>
                  )
                })}
              </div>
              <div className="Shipping">
                <p className="Shipping_Address">Shipping Address</p>

                <div className="Address_Details">
                  <p>{order.shippingAddress.address}</p>
                  <p>{order.shippingAddress.city}</p>
                  <p>{order.shippingAddress.postalCode} </p>
                  <p>{order.shippingAddress.country} </p>
                </div>
              </div>
            </div>
            <div className="Order_Summary">
              <p>Placed Order Summary</p>
              <div className="row">
                <div className="col1">
                  <p>OrderId</p>
                  <p>Order By</p>
                  <p>EmailId</p>
                  <p>Item price</p>
                  <p>Shipping price</p>
                  <p>Tax price</p>
                  <p>Total price</p>
                  <br></br>
                  <p>PaymentMethod</p>
                </div>
                <div className="col2">
                <p>{order._id}</p>
                <p>{order.user.name}</p>
                <p>{order.user.email}</p>
                  <p>${order.itemPrice}</p>
                  <p>${order.shippingPrice}</p>
                  <p>${order.taxPrice}</p>
                  <p>${order.totalPrice}</p>
                  <br></br>
                  <p>{order.paymentMethod}</p>
                </div>
              </div>
              <button onClick={paymentHandler}>Make Payment</button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
