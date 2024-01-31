const mongoose = require("mongoose")

const Schema = mongoose.Schema

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

const userModel = mongoose.model("userSchema", userSchema)

module.exports = userModel
