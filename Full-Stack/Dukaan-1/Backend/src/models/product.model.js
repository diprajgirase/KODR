const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
   title: {
      type: String,
      required: true
   },
   description: {
      type: String,
      required: true
   },
   price: {
      amount: {
         type: Number,
         required: true
      },
      currency: {
         type: String,
         required: true,
         enum: ["INR", "USD", "EUR"],
         default: "INR"
      }
   },
   stock: {
      type: Number,
      required: true,
      default: 1
   },
   images: [String],
   seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true
   }
}, { timestamps: true });

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;
