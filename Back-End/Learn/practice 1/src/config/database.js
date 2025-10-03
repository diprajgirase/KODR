import mongoose from "mongoose"

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MOGODB_URI)
        console.log("MONGODB Connected")
    }catch (error){
       console.error("MongoDB Connection Failed", error.message)
       process.exit(1)
    }
}

export default connectDB;