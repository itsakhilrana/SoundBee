import React, { useState, useEffect } from 'react'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Modal from 'react-modal'
import './App.css'
import './index.css'
import Header from './Components/Header'
import LoginScreen from './Screens/LoginScreen'
import SignupScreen from './Screens/SignupScreen'
import ProductScreen from './Screens/ProductScreen'
import HomeScreen from './Screens/HomeScreens'
import CartScreen from './Screens/CartScreen'
import AddressScreen from './Screens/AdressScreen'
import PaymentMethodScreen from './Screens/PaymentMethodScreen'
import PlaceorderScreen from './Screens/PlaceorderScreen'
import { OrderScreen } from './Screens/OrderScreen'
import MyOrderScreen from './Screens/MyOrderScreen'
import MyModal from '../src/Components/MyModal'

Modal.setAppElement('#root')
function App({hideLoader}) {
  
  useEffect(hideLoader, []);
  return (
    <Router>
      <div className="App">
        <MyModal></MyModal>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={HomeScreen}></Route>

          <Route path="/signup" component={SignupScreen}></Route>
          <Route path="/login" component={LoginScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/cart/:id?" component={CartScreen}></Route>   
          <Route path="/address" component={AddressScreen}></Route> 
          <Route path="/paymentmethod" component={PaymentMethodScreen}></Route> 
          <Route path="/placeorder" component={PlaceorderScreen}></Route> 
          <Route path="/order/:id" component={OrderScreen}></Route> 
          <Route path="/myorders" component={MyOrderScreen}></Route>   
        </Switch>
      </div>
    </Router>
  )
}

export default App
