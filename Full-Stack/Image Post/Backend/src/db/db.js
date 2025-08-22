const mongoose = require("mongoose")

function connectDB () {
   mongoose.connect("mongodb+srv://Kodr-day2:hA1IQ19BYLfSmfgb@cluster0.h1r2wjz.mongodb.net/")
    .then(()=>{
        console.log("Database Connected Successfully")
    })
    .catch(err =>{
        console.log(err)
    })
}

module.exports = connectDB