import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { USER_LOGOUT } from '../constants/userConstants'
import { logout } from '../actions/userActions'

import logo from '../Components/logo.svg'
import './Header.css'
const Header = ({history}) => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, userInfo, error } = userLogin
  console.log(userInfo)

  const logoutHandler = () => {
    dispatch(logout())
    // history.push('/')
  }

  return (
    <header>
      <div className="Navbar">
        <div className="Navbar_L">
          <Link to="/" className="Title">
           <img src={logo} width="22px" ></img> SoundBee
          </Link>
        </div>
        <div className="Navbar_R">
          <ul>
            {/* <li onClick={logoutHandler}>Logout</li> */}
            {userInfo ? (
              <>
                <li>
                  <Link className="Links" to="/cart">
                    Cart
                  </Link>
                </li>
               
                <li>
                  <div className="dropdown">
                    <button className="dropbtn">
                      {userInfo.name}
                      <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                      <li>
                        <Link className="Links" to="/myorders">
                          My Orders
                        </Link>
                      </li>
                     

                      <li>
                        <Link className="Links" onClick={logoutHandler}>
                          Logout
                        </Link>
                      </li>
                    </div>
                  </div>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link className="Links" to="/cart">
                    Cart
                  </Link>
                </li>
                <li>
                  <Link className="Links" to="/login">
                    Login
                  </Link>
                </li>
              </>
            )}

            {/* <li>
              <div className="Search_Box">
                <div className="Search">
                  <p>Search...</p>
                  <p>icon</p>
                </div>
                <div className="Search_Btn">Search</div>
              </div>
            </li> */}
            <li className="last">
              <p>
                <i
                  style={{
                    fontSize: '8px',
                    marginRight: '10px',
                    color: 'red',
                  }}
                  className="fas fa-circle"
                ></i>
                In Development
              </p>
            </li>
          </ul>
        </div>

        {/* <a href="#"><i class="fas fa-user"></i></a>
        <a href="#"><i class="fas fa-house-user"></i></a>
        <a href="#"><i class="fab fa-elementor"></i></a>
        <a href="#"><i class="fas fa-heart"></i></a>
        <a href="#"><i class="fas fa-shopping-cart"></i></a> */}
        {/* <a onClick={logoutHandler} href="#">
          <i class="fas fa-sign-out-alt"></i>
        </a> */}
      </div>
    </header>
  )
}

export default Header
