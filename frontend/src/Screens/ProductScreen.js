import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { detailProduct } from '../actions/productActions'
import { cartAddItem } from '../actions/cartActions'
import './ProductScreen.css'

const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1)

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, product, error } = productDetails

  useEffect(() => {
    if (!product._id || product._id !== match.params.id) {
      dispatch(detailProduct(match.params.id))
    }
  }, [dispatch, match])

  const addToCartHandler = () => {
    // history.push(`/cart/${match.params.id}?qty=${qty}`)
    history.push(`/cart`)
    dispatch(cartAddItem(match.params.id, qty))
  }

  return (
    <div className="Product_Screen">
      {loading ? (
        <p>Loading</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <div className="Back_btn">
            <Link className="Links" to="/">
              Go Back
            </Link>
          </div>
          <div className="ProductScreen_Container">
            <div className="Product_Detail">
              <div className="Product_Img">
                <img src={product.image}></img>
              </div>
              <div className="Product_Breif">
                <p className="Product_Name">{product.name}</p>
                <p className="Product_Description">{product.description}</p>
                <div className="Product_SubDetails">
                  <p>
                    {product.rating}{' '}
                    <i style={{ color: 'yellow' }} className="fas fa-star"></i>
                  </p>

                  <p>
                    {product.countInStock > 0 ? (
                      <p
                        className="InStock"
                        style={{ color: 'rgb(142, 233, 56)' }}
                      >
                        In Stock
                      </p>
                    ) : (
                      <p
                        className="OutofStock"
                        style={{ color: 'rgb(252, 38, 38)' }}
                      >
                        Out Of Stock
                      </p>
                    )}
                  </p>

                  {product.countInStock > 0 && (
                    <select
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                    >
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  )}
                  <p style={{ color: 'white' }}>
                    ${' '}
                    <span
                      style={{
                        fontSize: '25px',
                        fontWeight: '500',
                        color: 'white',
                      }}
                    >
                      {product.price}
                    </span>
                  </p>
                  <p>
                   {product.description2}
                  </p>
                  <p>
                  <i
                      style={{ color: 'white', marginRight: '10px' }}
                      className="fas fa-check"
                    ></i>
                   
                   {  product.keypoints && <span>{product.keypoints.a}</span>}
                  </p>
                  <p>
                    <i
                      style={{ color: 'white', marginRight: '10px' }}
                      className="fas fa-check"
                    ></i>
                   {  product.keypoints && <span>{product.keypoints.b}</span>}
                  </p>
                  <p>
                    <i
                      style={{ color: 'white', marginRight: '10px' }}
                      className="fas fa-check"
                    ></i>
                      {  product.keypoints && <span>{product.keypoints.c}</span>}
                  </p>
                  <div className="Product_SubDetails">
                    {/* <p>Price: {product.price}</p>
              <p>In Stock: {product.countInStock}</p> */}
                    <button
                      className="AddToCart_btn"
                      onClick={addToCartHandler}
                      disabled={product.countInStock === 0}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default ProductScreen
