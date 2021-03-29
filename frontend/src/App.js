import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
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
import LoadingSpinner from '../src/Components/LoadingSpinner'

Modal.setAppElement('#root')

function App() {
  
  // const productList = useSelector((state) => state.productList)

  // const { loading } = productList

  const [isloading, setIsloading] = useState(true)

  useEffect(() => {

    setTimeout(()=>{
      setIsloading(!isloading)
    },3000)
    
  }, [])

  return (
    <Router>
      <div className="App">
        {/* <MyModal></MyModal> */}

        {isloading ? (
          <LoadingSpinner caption = {'SoundBee'} marTop = {"0px"} />
        ) : (
          <>
            <Header></Header>
            <Switch>
              <Route exact path="/" component={HomeScreen}></Route>

              <Route path="/signup" component={SignupScreen}></Route>
              <Route path="/login" component={LoginScreen}></Route>
              <Route path="/product/:id" component={ProductScreen}></Route>
              <Route path="/cart/:id?" component={CartScreen}></Route>
              <Route path="/address" component={AddressScreen}></Route>
              <Route
                path="/paymentmethod"
                component={PaymentMethodScreen}
              ></Route>
              <Route path="/placeorder" component={PlaceorderScreen}></Route>
              <Route path="/order/:id" component={OrderScreen}></Route>
              <Route path="/myorders" component={MyOrderScreen}></Route>
              <Route path="/loading" component={LoadingSpinner}></Route>
            </Switch>
          </>
        )}
      </div>
    </Router>
  )
}

export default App
