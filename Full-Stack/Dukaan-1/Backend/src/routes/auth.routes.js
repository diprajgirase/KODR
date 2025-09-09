const express = require('express');
const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
const crypto = require("crypto")
const { registerUser, loginUser } = require("../controllers/auth.controller")
const { registerSeller, loginSeller } = require("../controllers/seller.controller")



const router = express.Router();

// User Routes //
router.post("/register", registerUser);

router.post("/login", loginUser)

// Seller Routes //
router.post("/seller/register", registerSeller);

router.post("/seller/login", loginSeller);


module.exports = router