const mongoose = require("mongoose")

const Schema = mongoose.Schema

// Define the schema for the student
const userSchema = new Schema(
  {
    // _id: Schema.Types.ObjectId,
    username: String,
    email: String,
    password: String,
    firstName: String,
    middleName: String,
    lastName: String,
    birthday: Date
  },
  { collection: "user" }
)

// Create the model using the main schema
const userModel = mongoose.model("userSchema", userSchema)

module.exports = userModel
