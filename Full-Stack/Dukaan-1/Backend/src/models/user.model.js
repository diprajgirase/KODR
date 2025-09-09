const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   username: {
      type: String,
      required: true,
      unique: true
   },
   fullName: {
      firstName: String,
      lastName: String
   },
   email: {
      type: String,
      required: true,
      unique: true
   },
   password: {
      type: String,
      required: true,
      select:false
   },
   role: {
      type: String,
      enum: ["user", "seller"],
      default: "user"
   }
})

const userModel = mongoose.model("User", userSchema);

module.exports = userModel