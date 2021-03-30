import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { addPaymentMethod } from '../actions/cartActions'
import './PaymentMethodScreen.css' 
import './PlaceorderScreen.css'

const PaymentMethodScreen = ({ history }) => {
  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { shippingAddress, paymentMethod } = cart

  const [paymentmethod, setPaymentmethod] = useState('Paypal')

  if (!shippingAddress) {
    history.push('/address')
  }

  const paymentHandler = () => {
    dispatch(addPaymentMethod(paymentmethod))
    history.push('/placeorder')
  }
  return (
    <div className="PaymentMethodScreen">
      <div className="Payment_Container">
      <p className="PaymentMethod">Payment Method</p>
        <form onSubmit={paymentHandler}>
       
          <div>
            <label>Paypal</label>
            <input
              type="radio"
              label="PayPal or Credit Card"
              checked
              value="Paypal"
              name="paymentmethod"
              onChange={(e) => setPaymentmethod(e.target.value)}
            ></input>
          </div>

          <label>Paytm</label>
          <input
            type="radio"
            label="Paytm"
            value="Paytm"
            name="paymentmethod"
            onChange={(e) => setPaymentmethod(e.target.value)}
          ></input>
          <br></br>

          <button type="submit">Continue</button>
          
        </form>
      </div>
    </div>
  )
}

export default PaymentMethodScreen
