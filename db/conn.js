import mongoose from "mongoose";

export const Connection = async ()=>{
    try {
        console.log("before connecting")
           await mongoose.connect(process.env.MONGODB_URI);
            console.log("db connected");
        
    } catch (error) {
        console.log(error)
        
    }


}