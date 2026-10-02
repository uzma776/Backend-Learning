import mongoose from "mongoose";
import bcrypt from "bcrypt"
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
userSchema.pre("save", async function(){
    //if password not changed then return from here no need to go below
    if(!this.isModifid(this.password)){
        return
    }
    //if password changes below line will work
    this.password =await bcrypt.hash(this.password, 10)

})
userSchema.methods.comparePassword = async function (enteredPassword) {
   return await bcrypt.compare(enteredPassword,this.password)

    
}
const User  = mongoose.model("User", userSchema)
export default User