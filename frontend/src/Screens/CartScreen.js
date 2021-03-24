import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { cartAddItem, cartRemoveItem } from '../actions/cartActions'
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'

import './CartScreen.css'

const CartScreen = ({ history, match, location }) => {
  const qty = location.search ? Number(location.search.split('=')[1]) : 1
  console.log(qty)

  const cart = useSelector((state) => state.cart)

  const { cartItems } = cart
  console.log(cart)
  console.log("Render again")

  const dispatch = useDispatch()

  const removeItemHandler = (id) => {
    dispatch(cartRemoveItem(id))
  }

  
  return (
    <div className="CartScreen">
      <div className="CartItem_Container">
        {cartItems.length === 0 ? (
          <p>No item</p>
        ) : (
          cartItems.map((product) => {
            return (
              <>
                <div className="Cart_Card" key={product.product}>
                  <div>
                    <img src={product.image} width="70px" height="70px"></img>
                  </div>
                  <div className="Cart_Breif">
                    <p className="CartProduct_Name">
                      {product.name}{' '}
                      <span className="qty">
                        <select
                          value={product.qty}
                          onChange={(e) => {
                            dispatch(
                              cartAddItem(
                                product.product,
                                Number(e.target.value)
                              )
                            )
                          }}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </select>
                      </span>
                    </p>
                    <p className="About_Product">{product.description} </p>

                    <p className="price">
                      ${product.price}{' '}
                      <span className="removeItem" onClick={()=> removeItemHandler(product.product)}>Remove</span>
                    </p>
                  </div>
                </div>
              </>
            )
          })
        )}
      </div>

      <div className="ProceedTo_Checkout"
        onClick={() => {
          history.push('/address')
        }}
      >
        <p>Proceed To CheckOut</p>
      </div>
    </div>
  )
}

export default CartScreen

{
  /* <div className="Card2">
              <div className="Card_Img2">
                <Link className="Link_Card" to={`/product/${product.product}`}>
                  <img src={product.image} width="120px" height="100px"></img>
                </Link>
              </div>
              <div className="Product_Details">
                <Link className="Link_Card" to={`/product/${product.product}`}>
                  <p className="Product_Title2">
                    {product.name}
                    <span className="Rating">
                      {product.rating}
                      <i
                        style={{ color: 'yellow' }}
                        className="fas fa-star"
                      ></i>
                    </span>
                  </p>
                </Link>

                <div className="Product_Brief2">
                  <p>{product.description}</p>
                  <select value={product.qty} onChange={(e) => {
                    dispatch(cartAddItem(product.product, Number(e.target.value)))
                  }}>
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="Price_Rating">
                  <span className="Price">
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
                  </span>
                </div>
                <div className="Btn_Add" onClick={()=> removeItemHandler(product.product)}>
                <i class="fas fa-trash"></i>
                </div>
              </div>
            </div> */
}
