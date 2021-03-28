import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLoginAction } from '../actions/userActions'
import './LoginScreen.css'
import { USER_RESET_ERROR } from '../constants/userConstants'


function LoginScreen({ history, location }) {
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, userInfo, error } = userLogin

  // console.log(userInfo)

  const redirect = location.search ? location.search.split('=')[1] : '/' 

  useEffect(() => {

    // if(userInfo){
    //   history.push('/')
    // }

    if (userInfo) {
      history.push(redirect)
    }

    dispatch({ type: USER_RESET_ERROR })
  }, [history, userInfo])

  const sumbitHandler = (e) => {
    e.preventDefault()

    dispatch(userLoginAction(email, password))
    setEmail('')
    setPassword('')
  }
  return (
    <div className="Login_Screen">
      
        {/* <h1>Login Screen</h1> */}
        {loading ? (
          <p style={{ color: 'white' }}>Loading Login Screen</p>
        ) : (
          <div className="LoginScreen_Container">
            <div className="LoginScreen_L">
              <p className="Brand_Title">Welcome Back</p>
              <p className="Punch_Line">Play & Charge Endlessly </p>
              <p className="Punch_Line">Power, Rugged & Build to last </p>
            </div>
            <div className="LoginScreen_R">
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <form className="Form" onSubmit={sumbitHandler}>
                <input
                  type="text"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <br></br>
                <input
                  type="text"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
                <br></br>
                <button type="submit">Login</button>
              </form>
              <p className="New_User">
                New User? <Link className="Links" style={{marginLeft:"10px",color:"gray",fontSize:"16px"}} to="/signup">Signup here</Link>
              </p>
            </div>
          </div>
        )}
      </div>
  )
}

export default LoginScreen
