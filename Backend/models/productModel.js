import mongoose from 'mongoose'

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    description2: {
      type: String,
      required: true,
    },
    keypoints: {
      a:{type:String,required:true},
      b:{type:String,required:true},
      c:{type:String,required:true}
    },
    image:{
      type:String,
      required:true
    },
    brand:{
      type:String,
      required:true
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
)

const Product = mongoose.model('Product', productSchema)

export default Product
