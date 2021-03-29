import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { orderDetailAction , payOrderAction} from '../actions/orderAction'
import LoadingSpinner from '../Components/LoadingSpinner'

import {PayPalButton} from 'react-paypal-button-v2'

import './OrderScreen.css'

export const OrderScreen = ({ history, match }) => {

  const orderId = match.params.id
  const [sdkReady, setSdkReady] = useState(false)
  
  const orderDetails = useSelector((state) => state.orderDetails)
  const { order, loading, error } = orderDetails
  
  const payOrder = useSelector((state) => state.payOrder)
  const { loading: loadingPay, paySuccess} = payOrder


  const dispatch = useDispatch()

  useEffect(() => {


     const addPayPAlScript = async () =>{
      // const {data: clientId} = await axios.get("/api/config/paypal")
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = `https://www.paypal.com/sdk/js?client-id=AckYcnhBldgZthmmDTM1auclZa56tbz0z6mG11frncAFPLAv3wa28yIXVKB48r0fGS9JV7D2L0iNLPak`
      script.async = true
      script.onload = () => {
        setSdkReady(true)
      }
      document.body.appendChild(script)
    }

    if (!window.paypal) {
      addPayPAlScript()
    } else {
      setSdkReady(true)
    }

    dispatch(orderDetailAction(match.params.id))
  }, [history, paySuccess, dispatch, orderId])

  const paymentHandler = (paymentResult) => {

    dispatch(payOrderAction(match.params.id, paymentResult))
  }
  return (
    <div>
      <div className="OrderScreen">
        {loading ? (
          <LoadingSpinner caption = {'Loading please wait...'}/>
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
                          <p className="orderCartProduct_Name">
                            {product.name}
                            <span className="orderQty">Qty {product.qty}</span>
                          </p>

                          <p className="orderProduct">{product.description} </p>

                          <p className="orderPrice"><span className="Price">
                            <span
                              style={{
                                fontSize: '14px',
                                fontWeight: '200',
                                marginRight: '3px',
                              }}
                            >
                              $
                            </span>
                            {product.price}
                          </span> </p>
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
              <p className="Place_Order">Order Summary</p>
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
                  <p>Payment Status</p>
                  <p>Delivery Status</p>
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
                  {order.isPaid ? <p className="isPaidGreen">Paid</p> : <p className="isPaidRed">Not Paid</p>}
                  {order.isDeliver ? <p className="isPaidGreen">Dilvered</p> : <p className="isPaidRed">Not Delivered</p>}
                </div>
              </div>
              {!order.isPaid && ( // it will only excute when we have pendind payment of order
                <div className="PayPal_Btn">
                  {loadingPay && <p>Loading Payment Result</p>}
                  {!sdkReady ? (
                    <p>Loading Paypal Payment Method</p>
                  ) : (
                    <PayPalButton
                      amount={order.totalPrice}
                      onSuccess={paymentHandler}
                    />
                  )}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
