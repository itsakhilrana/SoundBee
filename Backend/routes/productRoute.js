import express from 'express'
import Product from '../models/productModel.js'
const router = express.Router()

// @desc    Get Products
// @route   GET /api/products
// @access  Public
router.get('/api/products', async (req, res) => {
  try {
    const Products = await Product.find({})
    if (!Products) {
      return res.status(404).json({ message: 'Products Not Found' })
    } else {
      return res.status(200).json(Products)
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Server Error' })
  }
})

// @desc    Get Product Detail
// @route   GET /api/product/:id
// @access  Public
router.get('/api/product/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    if (!product) {
      return res.status(404).json({ message: 'Products Not Found' })
    } else {
      return res.status(200).json(product)
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Server Error' })
  }
})
export default router
