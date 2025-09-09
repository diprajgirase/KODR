const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")


// Generate Token //
const generateToken = (sellerId) => {
   return jwt.sign({ id: sellerId }, process.env.JWT_SECRET)

}
// const router = express.Router();

// Register Seller Create In DataBase //
async function registerSeller(req, res) {
   try {
      const { username, fullName: { firstName, lastName }, email, password, role = "seller" } = req.body

      if (!username || !firstName || !lastName || !email || !password) {
         return res.status(400).json({
            message: "All fields are required"
         })
      }

      const seller = await userModel.findOne({
         $or: [
            { email: email },
            { username: username }
         ]
      })

      if (seller) {
         return res.status(409).json({
            message: "Seller with given email or username already exist"
         })
      }

      const hashPassword = await bcrypt.hash(password, 10)

      const newSeller = await userModel.create({
         username: username,
         fullName: {
            firstName: firstName,
            lastName: lastName
         },
         email: email,
         password: hashPassword,
         role: role
      })

      const token = generateToken(newSeller._id)

      res.cookie("token", token)

      return res.status(200).json({
         message: "Seller created successfully",
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
   } catch (error) {
      res.status(500).json({
         message: "Internal Server Error",
         error: error.message
      })

   }


}

// Seller Login //
async function loginSeller(req, res) {
   try {
      const { username, email, password } = req.body

      const seller = await userModel.findOne({
         $or: [
            { email: email },
            { username: username }
         ]
      }).select("+password")

      if (!seller) {
         return res.status(404).json({
            message: "Seller not found"
         })
      }

      const isMatch = await bcrypt.compare(password, seller.password)

      if (!isMatch) {
         return res.status(400).json({
            message: "Invalid password"
         })
      }

      const token = generateToken(seller._id)
      console.log(token);

      res.cookie("token", token)

      const { password: pwd, ...sellerData } = seller._doc;

      res.status(200).json({
         message: "Seller Login Successfully",
         user: sellerData,
         token
      })
   } catch (error) {
      res.status(500).json({
         message: "Internal Server Error",
         error: err.message
      })
   }


}


async function getSellerProducts(req, res) {

   const seller = req.seller;

   const products = await productModel.find({
      seller: seller._id
   })

   res.status(200).json({
      message: "seller products fetched successfully",
      products
   })


}

module.exports = {
   registerSeller,
   loginSeller,
   getSellerProducts
}