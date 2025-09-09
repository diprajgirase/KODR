const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const { createProduct } = require("../controllers/product.controller");
const { getSellerProducts } = require("../controllers/seller.controller");
const authMiddleware = require("../middlewares/auth.middleware")
const productModel = require("../models/product.model");

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post(
  "/createProduct",
  authMiddleware.authSeller,
  upload.array("images", 5),
  createProduct
);

router.get(
  "/seller",
  authMiddleware.authSeller,
  getSellerProducts
);

router.get("/", async (req, res) => {
  try {
    const products = await productModel.find();
    res.status(200).json({
      message: "Products fetched successfully",
      products
    });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productModel.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: "Product fetched successfully",
      product,
    });
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong",
      error: err.message,
    });
  }
});



module.exports = router;
