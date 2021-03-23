import express from 'express'
import bcrypt from 'bcryptjs'
const router = express.Router()
import User from '../models/userModels.js'
import generateToken from '../utils/generateToken.js'


// @desc    Signup
// @route   POST /api/signup
// @access  Public
router.post('/api/signup', async (req, res) => {
  const { name, email, password } = req.body

  try {
    if (!name || !email || !password) {
      return res.json({ message: 'Please fill all the fields.' })
    }

    let user = await User.findOne({ email: email })

    if (user) {
      return res.json({ message: 'Email already in use.' })
    } else {
      user = await User.create({ name, email, password })

      const salt = await bcrypt.genSalt(10)
      user.password = await bcrypt.hash(password, salt)
      await user.save()

      const token = generateToken(user._id)

      return res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: token,
      })
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Server Error' })
  }
})

// @desc    LOGIN
// @route   LOGIN /api/signup
// @access  Public

router.post('/api/login', async (req, res) => {

  const { email, password } = req.body

  // LAter add email validation also
  if (!email || !password) {
    return res.status(500).json({ message: "Please fill all fields" })
  }
  try {

    let user = await User.findOne({ email: email })

    if (!user) {
      return res.status(404).json({ message: "Invalid User" })
    } else {

      const match = await bcrypt.compare(password, user.password)
      if (!match) {
        return res.status(401).json({ message: 'Invalid User Password' })
      }

      const token = generateToken(user._id)
      return res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: token,
      })

    }

  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Server Error' })
  }
})

export default router
