import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        min: [3,"minimum 3 characters"],
        max: [12, "maximum 12 characters allowed"]
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        min: 3,
        max: 8

    },
    role:{
        required: true,
        type: String,
        default: "user"
    },
    profile:{
        type: String,
        required: true
    }

},{
    timestamps: true
})
const User  = mongoose.model("User", userSchema)
export default User