import express from 'express'
const router = express.Router()

import Order from '../models/orderModel.js'
import { auth } from '../middleware/auth.js'

router.post('/api/order', auth, async (req, res) => {
  const {
    cartItems,
    shippingAddress,
    paymentMethod,
    itemPrice,
    shippingPrice,
    totalPrice,
    taxPrice,
  } = req.body

  try {
    if (cartItems && cartItems.length === 0) {
      return res.status(400).json({ message: 'No Order Item' })
    }

    const order = new Order({
      user: req.user,

      cartItems,
      shippingAddress,
      paymentMethod,
      itemPrice,
      shippingPrice,
      totalPrice,
      taxPrice,
    })

    const createdOrder = await order.save()

    res.status(200).json(createdOrder)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error })
  }
})

router.get('/api/order/:id', auth, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate(
      'user',
      'name email'
    )

    if (!order) {
      return res.status(404).json({ message: 'Order Not Found' })
    }

    res.status(200).json(order)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error })
  }
})

export default router

// {
//     "cartItems": [
//       {
//         "productId":122233444545,
//         "name": "SoundbeeProduct",
//         "price": 12,
//         "description": "Good product" ,
//         "qty": 1
//       }
//     ],
//     "shippingAddress": {
//       "address": "My Address",
//       "city": "My City",
//       "pinCode": 140507,
//       "country": "India"
//     },
//     "paymentMethod": "Paypal"
//    }
