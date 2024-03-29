import express from 'express'
import morgan from 'morgan'
import path from 'path'
const app = express()

app.use(morgan('dev'))
const PORT = process.env.PORT || 5000

app.use(express.json())
console.log('Started')

// All Credential Things in Dotenv
import dotenv from 'dotenv'
dotenv.config()

// DataBase Conection
import connectDB from './dbConnection/MongoDb.js'
connectDB()

// All Routes Configration
import orderRoutes from './routes/orderRoute.js'
app.use(orderRoutes)

import userRoutes from './routes/userRoutes.js'
app.use(userRoutes)

import productRoutes from './routes/productRoute.js'
app.use(productRoutes)

const __dirname = path.resolve() 

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, "./frontend/build")));

  app.get("*", function (_, res) {
    res.sendFile(
      path.join(__dirname, "./frontend/build/index.html"),
      function (err) {
        res.status(500).send(err);
      }
    );
  });

} else {
  // Server Testing
  app.use('/test', (req, res) => {
    res.send('Server Tested')
  })
}
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
)
