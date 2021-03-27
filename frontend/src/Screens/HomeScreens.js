import React, { useEffect } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import { Link } from 'react-router-dom'
import './HomeScreen.css'
import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from '../actions/productActions'

// import {PRODUCT_LIST_RESET} from '../constants/productConstants'

const HomeScreens = () => {
  // const numbers = new Array(10).fill(1).map((_, index) => index + 1)

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, products, error } = productList

  const userLogin = useSelector((state) => state.userLogin)
  const { loading: userLoading, userInfo, error: userError } = userLogin
  // console.log(products[0])

  const TopPick = products.filter((product) => {
    return product.rating == 5
  })

  console.log(TopPick)

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <div className="HomeScreen">
     
      {loading ? (
        <p>Loading Products</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="HomeScreen_Container">
          <div className="Product_Container">
            <div className="Products">
              {/* {userInfo ? (
                <p
                  style={{
                    fontSize: '18px',
                    marginBottom: '20px',
                    paddingTop: '10px',
                  }}
                >
                  Hi, {userInfo.name}
                </p>
              ) : (
                ''
              )} */}

              <div className="Products_Scroll">
                <p style={{ fontSize: '14px', marginBottom: '20px', letterSpacing:"1px" }}>
                  Today Deal's
                </p>
                <ScrollContainer className="Scroll_container">
                  {products.map((product) => (
                    <div className="Card">
                      <div className="Card_Img">
                        <Link
                          className="Link_Card"
                          to={`/product/${product._id}`}
                        >
                          <img
                            src={product.image}
                            width="120px"
                            height="100px"
                          ></img>
                        </Link>
                      </div>
                      <Link
                        className="Link_Card"
                        to={`/product/${product._id}`}
                      >
                        <p className="Product_Title">
                          {product.name}
                          <span className="Rating">
                            {product.rating}
                            <i
                              style={{
                                color: 'yellow',
                                marginLeft: '4px',
                                fontSize: '8px',
                              }}
                              className="fas fa-star"
                            ></i>
                          </span>
                        </p>
                      </Link>
                      <div className="Product_Brief">
                        <p>{product.description}</p>
                        {/* <p>In Stocks- {product.countInStock}</p> */}
                      </div>
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
                      <Link
                        className="Link_Card"
                        to={`/product/${product._id}`}
                      >
                        <div className="Explore_btn">Explore</div>
                      </Link>
                    </div>
                  ))}
                </ScrollContainer>
              </div>
              <div className="Products_Scroll2">
                <p style={{ fontSize: '14px', marginBottom: '20px', letterSpacing:"1px" }}>
                  Best Seller's
                </p>
                <ScrollContainer className="Scroll_container">
                  {products.map((product) => (
                    <div className="Card2">
                      <div className="Card_Img2">
                        <Link
                          className="Link_Card"
                          to={`/product/${product._id}`}
                        >
                          <img
                            src={product.image}
                            width="120px"
                            height="100px"
                          ></img>
                        </Link>
                      </div>
                      <div className="Product_Details">
                        <Link
                          className="Link_Card"
                          to={`/product/${product._id}`}
                        >
                          <p className="Product_Title2">
                            {product.name}
                            <span className="Rating">
                              {product.rating}
                              <i
                                style={{
                                  color: 'yellow',
                                  marginLeft: '4px',
                                  fontSize: '8px',
                                }}
                                className="fas fa-star"
                              ></i>
                            </span>
                          </p>
                        </Link>

                        <div className="Product_Brief2">
                          <p>{product.description}</p>
                          {/* <p>In Stocks- {product.countInStock}</p> */}
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

                        <Link
                          className="Link_Card"
                          to={`/product/${product._id}`}
                        >
                          <div className="Btn_Add">
                            <p>Explore</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))}
                </ScrollContainer>
              </div>
            </div>
            <div className="Premium_Products">
              <p style={{ fontSize: '14px', marginBottom: '20px' , letterSpacing:"1px"}}>
                Top Pick's
              </p>
              {TopPick.map((product) => (
                <div key={product._id} className="Premium_Card">
                  <div className="Premium_CardImg">
                    <Link className="Link_Card" to={`/product/${product._id}`}>
                      <img src={product.image}></img>
                    </Link>
                  </div>
                  <div className="Premium_Price">
                    $
                    <span
                      style={{
                        fontSize: '25px',
                        fontWeight: '500',
                        color: 'white',
                        marginLeft: '5px',
                      }}
                    >
                      {product.price}
                    </span>
                  </div>
                  <div className="Details">
                    <Link className="Link_Card" to={`/product/${product._id}`}>
                      <p className="Premium_Title">
                        {product.name}
                        <span className="Rating">
                          {product.rating}
                          <i
                            style={{
                              color: 'yellow',
                              marginLeft: '4px',
                              fontSize: '12px',
                            }}
                            className="fas fa-star"
                          ></i>
                        </span>
                      </p>
                    </Link>

                    <p className="Premium_Brief">
                    {product.description2}
                    </p>

                    <Link className="Link_Card" to={`/product/${product._id}`}>
                      <div className="Premium_Btn">
                        <p>Explore</p>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="Ads">
              <div className="Ads_Container">
                <p>
                  FOR PURE BASS NOTHING BEATS{' '}
                  <span style={{ color: 'white' }}>SoundBee</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HomeScreens
{
  /* <div className="Card">
                <div className="Card_Img"></div>
                <p className="Product_Title">Heading</p>
                <p className="Product_Brief"></p>
              </div>
              <div className="Card">
                <div className="Card_Img"></div>
                <p className="Product_Title">Heading</p>
                
              </div>
              <div className="Card">
                <div className="Card_Img"></div>
                <p className="Product_Title">Heading</p>
                <p className="Product_Brief"></p>
              </div>
              <div className="Card">
                <div className="Card_Img"></div>
                <p className="Product_Title">Heading</p>
                <p className="Product_Brief"></p>
              </div>
              <div className="Card">
                <div className="Card_Img"></div>
                <p className="Product_Title">Heading</p>
                <p className="Product_Brief"></p>
              </div> */
}
