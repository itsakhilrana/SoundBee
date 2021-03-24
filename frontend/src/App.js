import React, { useState } from 'react'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Modal from 'react-modal'
import './App.css'
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

Modal.setAppElement('#root')
function App() {
  const [open, setOpen] = useState(true)

  const toggle = () => {
    setOpen(!open)
  }
  return (
    <Router>
      <div className="App">
        <Modal
          className="Modal"
          overlayClassName="Overlay"
          isOpen={open}
          onRequestClose={toggle}
        >
          <div className="close" onClick={toggle}>
            Close
          </div>
          <div className="Modal_Container">
            <p className="Web_Name">SoundBee</p>
            <div className="Modal_L">
              <div className="About_Container">
                <p className="About_web">
                  It's a Mern Stack based ecommerce website which is in
                  development stage. Provide all the basic features like
                  searching a product, adding it to cart and payment gateway.
                  Also user can write review about product which they purchased
                  as well as can view their order status. SoundBee has a admin
                  panel which control whole management of website like User
                  order, Product addition, User authorization. Motive for
                  creating SoundBee is to enhance my skills.
                </p>
                <div className="Tech">
                  <p className="Tech_Used">Tech Used</p>
                  <ul>
                    <li>React</li>
                    <li>Node</li>
                    <li>Mongodb</li>
                    <li>Redux</li>
                  </ul>
                </div>
              </div>
              <div className="Modal_M">
                <p className="Developed">Developed</p>
                <div className="Developed_List">
                  <p>
                    <i
                      style={{
                        fontSize: '8px',
                        marginRight: '10px',
                        color: 'greenyellow',
                      }}
                      className="fas fa-circle"
                    ></i>
                    Product Listing
                  </p>
                  <p>
                    <i
                      style={{
                        fontSize: '8px',
                        marginRight: '10px',
                        color: 'greenyellow',
                      }}
                      className="fas fa-circle"
                    ></i>
                    Login Feature
                  </p>
                  <p>
                    <i
                      style={{
                        fontSize: '8px',
                        marginRight: '10px',
                        color: 'greenyellow',
                      }}
                      className="fas fa-circle"
                    ></i>
                    Signup Feature
                  </p>
                </div>
              </div>
              <div className="Modal_R">
                <p className="In_Development">In Development</p>
                <div className="In_Development_List">
                  <p>
                    <i
                      style={{
                        fontSize: '8px',
                        marginRight: '10px',
                        color: 'red',
                      }}
                      className="fas fa-circle"
                    ></i>
                    Non-responsive
                  </p>
                  <p>
                    <i
                      style={{
                        fontSize: '8px',
                        marginRight: '10px',
                        color: 'red',
                      }}
                      className="fas fa-circle"
                    ></i>
                    Order Feature
                  </p>
                  <p>
                    <i
                      style={{
                        fontSize: '8px',
                        marginRight: '10px',
                        color: 'red',
                      }}
                      className="fas fa-circle"
                    ></i>
                    Payment Gateway
                  </p>
                  <p>
                    <i
                      style={{
                        fontSize: '8px',
                        marginRight: '10px',
                        color: 'red',
                      }}
                      className="fas fa-circle"
                    ></i>
                    Admin Panel
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Modal>
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
