const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()

app.use(express.json())
app.use(cors())

const uri = "mongodb://127.0.0.1:27017/ibits_authentication_app"
const port = 8000

async function connectDB() {
  try {
    const connected = await mongoose.connect(uri)
    if (connected) {
      console.log("✅ Connected to MongoDB")
      app.listen(port, () => {
        console.log("🚀 Server listening on port " + port)
      })
    }
  } catch (error) {
    console.error(error)
  }
}

connectDB()

// USER ROUTES
const userRoutes = require("./routes/userRoute.js")
app.use(userRoutes)
