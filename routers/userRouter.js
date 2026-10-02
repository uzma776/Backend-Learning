import express from 'express'
import { deleteUser, getAllUsers, loginUser, registerUser, updateProfile, userProfile } from "../Controller/userController.js";
const userRouter = express.Router()

userRouter.post("/register-user/",registerUser)
userRouter.post("/login-user/",loginUser)
userRouter.get("/user-profile/:id", userProfile)
userRouter.get("/get-all-users/",getAllUsers)
userRouter.patch("/update-profile/:id",updateProfile)
userRouter.delete("/delete-user/:id",deleteUser)
export default userRouter