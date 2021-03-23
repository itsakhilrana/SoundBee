import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveAddress } from '../actions/cartActions'
import './AdressScreen.css'

const AddressScreen = ({history}) => {

  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  const dispatch = useDispatch()

  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  const [country, setCountry] = useState(shippingAddress.country)

  const addressHandler = () => {
      dispatch(saveAddress({address,city,postalCode,country}))
      history.push('/paymentmethod')
  }

  return (
    <>
      <div className="AddressScreen">
        <form onSubmit={addressHandler}>
          <div>
            <label>Address</label>
            <input
              type="text"
              placeholder="Enter address"
              value={address}
              required
              onChange={(e) => setAddress(e.target.value)}
            ></input>
          </div>

          <label>City</label>
          <input
            type="text"
            placeholder="Enter address"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></input>

          <label>Pin Code</label>
          <input
            type="text"
            placeholder="Enter address"
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          ></input>

          <label>Country</label>
          <input
            type="text"
            placeholder="Enter address"
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          ></input>

          <button type="submit">Continue</button>
        </form>
      </div>
    </>
  )
}

export default AddressScreen
