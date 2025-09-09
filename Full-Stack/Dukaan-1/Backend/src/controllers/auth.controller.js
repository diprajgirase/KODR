const userModel = require("../models/user.model")
const mongoose = require("mongoose")
const express = require("express")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const generateToken = (userId) => {
   return jwt.sign({ id: userId }, process.env.JWT_SECRET)
}


const router = express.Router();
async function registerUser(req, res) {

   const { username, fullName: { firstName, lastName }, email, password, role } = req.body

   const user = await userModel.findOne({
      $or: [
         { email: email },
         { username: username }
      ]
   })

   if (user) {
      return res.status(401).json({
         message: "User not found"
      })
   }

   const hashPassword = await bcrypt.hash(password, 10)

   const newUser = await userModel.create({
      username: username,
      fullName: {
         firstName: firstName,
         lastName: lastName
      },
      email: email,
      password: hashPassword,
      role: role
   })

   const token = generateToken(newUser)

   res.cookie("token", token)

   return res.status(200).json({
      message: "User created successfully",
      user: {
         username: username,
         fullName: {
            firstName: firstName,
            lastName: lastName
         },
         email: email,
         token: token,
      }
   })

}

async function loginUser(req, res) {

   const { username, email, password } = req.body

   const user = await userModel.findOne({
      $or: [
         { email: email },
         { username: username }
      ]
   }).select("+password")

   if (!user) {
      return res.status(401).json({
         message: "User not found"
      })
   }

   const isMatch = await bcrypt.compare(password, user.password)

   if (!isMatch) {
      return res.status(400).json({
         message: "Invalid password"
      })
   }

   const token = generateToken(user._id)
   console.log(token);

   res.cookie("token", token)

   res.status(200).json({
      message: "User Login Successfully",
      user,
      token
   })

}


module.exports = {
   registerUser,
   loginUser
}