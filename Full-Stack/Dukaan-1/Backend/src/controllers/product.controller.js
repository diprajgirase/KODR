const productModel = require("../models/product.model")
const mongoose = require("mongoose")
const express = require("express")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const uploadFile = require("../services/storage.service")
const router = require("../routes/product.routes")


async function createProduct(req, res) {

   const price = req.body.price ? JSON.parse(req.body.price) : null
   console.log(price);
   
   try {
      const { title, description, stock  } = req.body
      const seller = req.seller
    


      const files = await Promise.all(req.files.map(async (file) => {
         return await uploadFile(file.buffer)
      }))

      const newProduct = await productModel.create({
         title,
         description,
         price: {
            amount: price?.amount,
            currency: price?.currency || "INR"
         },
         stock: parseInt(stock) || 0,
         images: files.map((file) => file.url),
         seller:seller._id,
      })

       res.status(201).json({
         message: "Product created successfully",
        newProduct
      })
   } catch (error) {
   
   res.status(500).json({
         message: "Server Error",
         data: error.message
      });

   }

}

async function getAllProducts() {

   const page = req.query.page ? parseInt(req.query.page) : 1

   const products = await productModel.find()
      .skip((page - 1) * 5)
      .limit(5)
      .sort({ createdAt: -1 })

   res.status(200).json({
      message: "Products fetched successfully",
      data: products,
   })
}

module.exports = {
   createProduct,
   getAllProducts
}