const express = require("express")
const router = express.Router()

const User = require("../models/user.js")

router.post("/auth", async (req, res) => {
  try {
    const user = await User.findOne({
      $or: [{ username: req.body.username }, { email: req.body.username }]
    })
    const { password, firstName, lastName } = user
    if (password === req.body.password) {
      console.log(user)
      if (user) {
        res.json({
          fullName: `${firstName} ${lastName}`,
          firstName,
          lastName
        })
      }
    }
  } catch (error) {
    console.log(error)
    res.status(404).json({ message: "Wrong Username or Password" })
  }
})

router.post("/users", async (req, res) => {
  try {
    console.log(req.body)
    const user = new User({ ...req.body })
    user.save()
    res.send({ message: "User created successfully" })
    console.log("user created!")
  } catch (error) {
    console.log(error)
  }
})

router.get("/users", async (req, res) => {
  try {
    const users = await User.find()
    res.send(users)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
