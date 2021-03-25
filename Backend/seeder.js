import Product from './models/productModel.js'
import User from './models/userModels.js'
import connectDB from './dbConnection/MongoDb.js'
import dotenv from 'dotenv'
dotenv.config()

connectDB()

const products = [
  {
      "price": 89.99,
      "rating": 4.5,
      "countInStock": 3,
      
      "name": "SoundBee S1",
      "image": "/images/hp2.jpg",
      "description": "Built-in microphone.",
      "description2": "Music delivered straight from the studio to your ears. These wireless earphones will change the way you listen to music forver. A great battery, stylish design and much more make these a true steal of a deal!",
      'keypoints': {
        'a':'Bluetooth 5.0 Connectivity',
        'b':'High-Definition Sound Quality',
        'c':'Soft and Comfortable fit'
      },
      "brand": "SoundBee",
     
     
  },
  {
      "price": 59.99,
      "rating": 4.5,
      "countInStock": 10,
      "description2": "Music delivered straight from the studio to your ears. These wireless earphones will change the way you listen to music forver. A great battery, stylish design and much more make these a true steal of a deal!",
      'keypoints': {
        'a':'Bluetooth 5.0 Connectivity',
        'b':'High-Definition Sound Quality',
        'c':'Soft and Comfortable fit'
      },
      "name": "SoundBee S2",
      "image": "/images/hp1.jpg",
      "description": "Long battery life",
      "brand": "SoundBee",
      
  },
  {
      "price": 99.99,
      "rating": 3.5,
      "countInStock": 5,
      "description2": "Music delivered straight from the studio to your ears. These wireless earphones will change the way you listen to music forver. A great battery, stylish design and much more make these a true steal of a deal!",
      'keypoints': {
        'a':'Bluetooth 5.0 Connectivity',
        'b':'High-Definition Sound Quality',
        'c':'Soft and Comfortable fit'
      },
      "name": "SoundBee S3",
      "image": "/images/hp9.jpg",
      "description": "An intuitive design",
      "brand": "SoundBee",
      
  },
  {
      "price": 39.99,
      "rating": 4.5,
      "countInStock": 10,
      "description2": "Music delivered straight from the studio to your ears. These wireless earphones will change the way you listen to music forver. A great battery, stylish design and much more make these a true steal of a deal!",
      'keypoints': {
        'a':'Bluetooth 5.0 Connectivity',
        'b':'High-Definition Sound Quality',
        'c':'Soft and Comfortable fit'
      },
      "name": "SoundBee S4",
      "image": "/images/hp4.jpg",
      "description": "High bass configration",
      "brand": "SoundBee",
      
  },
  {
      "price": 49.99,
      "rating": 3.5,
      "countInStock": 7,
      "description2": "Music delivered straight from the studio to your ears. These wireless earphones will change the way you listen to music forver. A great battery, stylish design and much more make these a true steal of a deal!",
      'keypoints': {
        'a':'Bluetooth 5.0 Connectivity',
        'b':'High-Definition Sound Quality',
        'c':'Soft and Comfortable fit'
      },
      "name": "SoundBee S5",
      "image": "/images/hp5.jpg",
      "description": "Smooth playing dot",
      "brand": "SoundBee",
      
  },
  {
      "price": 29.99,
      "rating": 4.0,
      "countInStock": 0,
      "description2": "Music delivered straight from the studio to your ears. These wireless earphones will change the way you listen to music forver. A great battery, stylish design and much more make these a true steal of a deal!",
      'keypoints': {
        'a':'Bluetooth 5.0 Connectivity',
        'b':'High-Definition Sound Quality',
        'c':'Soft and Comfortable fit'
      },
      "name": "SoundBee S6",
      "image": "/images/hp6.jpg",
      "description": "Meet Echo Dot",
      "brand": "SoundBee",
      
  },
  {
      "price": 29.99,
      "rating": 3.5,
      "countInStock": 0,
      "description2": "Music delivered straight from the studio to your ears. These wireless earphones will change the way you listen to music forver. A great battery, stylish design and much more make these a true steal of a deal!",
      'keypoints': {
        'a':'Bluetooth 5.0 Connectivity',
        'b':'High-Definition Sound Quality',
        'c':'Soft and Comfortable fit'
      },
      "name": "SoundBee S7",
      "image": "/images/hp7.jpg",
      "description": "Speaker with fabric",
      "brand": "SoundBee",
      
     
  },
  {
      "price": 29.99,
      "rating": 4.5,
      "countInStock": 0,
      "description2": "Music delivered straight from the studio to your ears. These wireless earphones will change the way you listen to music forver. A great battery, stylish design and much more make these a true steal of a deal!",
      'keypoints': {
        'a':'Bluetooth 5.0 Connectivity',
        'b':'High-Definition Sound Quality',
        'c':'Soft and Comfortable fit'
      },
      "name": "SoundBee S8",
      "image": "/images/hp8.jpg",
      "description": "Compact small space",
      "brand": "SoundBee",
     
  },
  {
      "price": 29.99,
      "rating": 5.0,
      "countInStock": 0,
      "description2": "Music delivered straight from the studio to your ears. These wireless earphones will change the way you listen to music forver. A great battery, stylish design and much more make these a true steal of a deal!",
      'keypoints': {
        'a':'Bluetooth 5.0 Connectivity',
        'b':'High-Definition Sound Quality',
        'c':'Soft and Comfortable fit'
      },
      "name": "SoundBee S9",
      "image": "/images/hp3.jpg",
      "description": "Stunning design fabric",
      "brand": "SoundBee",
      
  }
]


const importData = async () => {
    try {
      
      await Product.deleteMany()
      await User.deleteMany()
  
      const sampleProducts = products.map((product) => {
        return { ...product }
      })
  
      await Product.insertMany(sampleProducts)
  
      console.log('Data Imported!')
      process.exit()
    } catch (error) {
      console.error(`${error}`)
      process.exit(1)
    }
  }

  const destroyData = async () => {
    try {
      
      await Product.deleteMany()
      await User.deleteMany()
  
      console.log('Data Destroyed!')
      process.exit()
    } catch (error) {
      console.error(`${error}`)
      process.exit(1)
    }
  }


  if (process.argv[2] === '-d') {
    destroyData()
  } else {
    importData()
  }