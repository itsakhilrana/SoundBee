import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userRegAction } from '../actions/userActions'
import './SignupScreen.css'
import { USER_RESET_ERROR, USER_REG_LOGOUT } from '../constants/userConstants'
import SbLogo from './Sblogo.svg'

const SignupScreen = ({ history }) => {
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const userReg = useSelector((state) => state.userReg)
  const { loading, userInfo, error } = userReg

  useEffect(() => {
    // dispatch({ type: USER_REG_LOGOUT })
    if (userInfo) {
      history.push('/login')
    }
    // dispatch({ type: USER_RESET_ERROR })
    
  }, [history, userInfo])

  const sumbitHandler = (e) => {
    e.preventDefault()

    dispatch(userRegAction({ name, email, password }))
    setEmail('')
    setName('')
    setPassword('')
  }
  return (
    <div className="Login_Screen">
      {loading ? (
        <p style={{ color: 'white' }}>Loading Signup Screen</p>
      ) : (
        <div className="LoginScreen_Container">
          <div className="LoginScreen_L">
            <p className="Brand_Title">SoundBee </p>
            <p className="Punch_Line">Put the world on mute </p>
            <p className="Punch_Line">Never drop the beat #DareToBee </p>
          </div>
          <div className="LoginScreen_R">
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form className="Form" onSubmit={sumbitHandler}>
              <input
                type="text"
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              ></input>
              <br></br>
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
              <button type="submit">Signup</button>
            </form>
            <p className="New_User">
              Already User?{' '}
              <Link
                className="Links"
                style={{ marginLeft: '10px', color: 'gray', fontSize: '16px' }}
                to="/login"
              >
                Login here
              </Link>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default SignupScreen
