import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { myOrdersAction } from '../actions/orderAction'
import { Link } from 'react-router-dom'

import LoadingSpinner from '../Components/LoadingSpinner'

import './MyOrderScreen.css'

const MyOrderScreen = ({history}) => {

  const userLogin = useSelector(state => state.userLogin)

  const {userInfo} = userLogin
  
  const myOrder = useSelector((state) => state.myOrder)

  const { loading, order: myOrderList, error } = myOrder

  const dispatch = useDispatch()

  useEffect(() => {

    if(!userInfo){
     return history.push('/')
    }
      dispatch(myOrdersAction())
    
    
  }, [dispatch])

  return (
    <div className="MyOrder_Screen">
      {loading ? (
        <LoadingSpinner caption={'Loading please wait...'}/>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          
            {myOrderList.length === 0 && <p>No Orders Yet!</p>}

            {myOrderList.length !== 0 && (
              <>
                <table>
                    <caption>My Orders</caption>
                    <tr>
                  <th>Order Id</th>
                  <th>Date</th>
                  <th>Paid</th>
                  <th>Deilvery</th>
                  <th></th>
                </tr>
                {myOrderList.map((order) => (
                  <tr>
                    <td>{order._id}</td>
                    <td>{order.createdAt.substring(0, 10)}</td>
                    <td>
                      {order.isPaid ? (
                        <i
                          style={{ color: 'rgb(115, 168, 45)' }}
                          className="fas fa-check"
                        ></i>
                      ) : (
                        <i
                          style={{ color: 'rgb(248, 48, 34)' }}
                          className="fas fa-times"
                        ></i>
                      )}
                    </td>
                    <td>
                      {order.isDeliver ? (
                        <i
                          style={{ color: 'rgb(115, 168, 45)' }}
                          className="fas fa-check"
                        ></i>
                      ) : (
                        <i
                          style={{ color: 'rgb(248, 48, 34)' }}
                          className="fas fa-times"
                        ></i>
                      )}
                    </td>
                    <td>
                      <Link className="Links" to={`/order/${order._id}`}>
                        <p >Details</p>
                      </Link>
                    </td>
                  </tr>
                ))}
                </table>
              </>
            )}
          
        </>
      )}
    </div>
  )
}

export default MyOrderScreen
