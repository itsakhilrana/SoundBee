import axios from 'axios'
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_RESET,
  PRODUCT_DETAILS_RESET,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS
} from '../constants/productConstants'

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST })
    const {data} = await axios.get(`/api/products`)
    const products = data
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: products })
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message })
  }
}


export const detailProduct = (productid) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST })
    const {data} = await axios.get(`/api/product/${productid}`)

    if(data.message){
      return dispatch({type: PRODUCT_DETAILS_FAIL, payload:data.message})
    }else{
      const products = data
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: products })
    }
    
  } catch (error) {
    dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message })
  }
}
