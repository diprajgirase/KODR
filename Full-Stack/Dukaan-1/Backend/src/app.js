const express = require("express");
const cookieParser = require("cookie-parser")
const mongoose = require("mongoose");
const authRouter = require("../src/routes/auth.routes")
const productRouter = require("../src/routes/product.routes")
const cors = require("cors")

const app = express();
app.use(cors({
   origin: "http://localhost:5173",
   credentials: true
}))
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRouter)

app.use("/api/products", productRouter)




module.exports = app