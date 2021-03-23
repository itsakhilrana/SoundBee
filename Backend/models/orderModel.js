import mongoose from 'mongoose'

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    cartItems: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Product',
        },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        description: { type: String, required: true },
        qty: { type: Number, required: true },
        image: {type:String, required:true}
      },
    ],
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: Number, required: true },
      country: { type: String, required: true },
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    taxPrice:{
      type:Number,
      required:true
    },
    shippingPrice:{
      type:Number,
      required:true
    },
    itemPrice:{
      type:Number,
      required:true
    },
    totalPrice:{
      type:Number,
      required:true
    }
  },
  {
    timestamps: true,
  }
)

const Order = mongoose.model('Order', orderSchema)

export default Order
