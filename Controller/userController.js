/** @format */

import mongoose from "mongoose";
import User from "../models/userModel.js";
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, role, profile } = req.body;
    const user = await User.create({
      name,
      email,
      password,
      role,
      profile,
    });
    if(!name || !email || !password || !role || !profile){
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      })
    }
    if(!user){
      return res.status(401).json({
        success: false,
        message: "user not created"
      })
    }
    return res.status(200).json({
      success: true,
      message: "user created",
      user

    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error
    })
  }
};
export const loginUser = async (req, res) => {
  try {
    const {email,password} = req.body
    const user = await User.findOne({email})
    if(!email || !password){
      return res.status(401).json({
        success: false, 
        message: "all fields are required"
      })
    }
    
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "user not found",
      });
    }
    if(password !== user.password){
      return res.status(401).json({
        success: true,
        message: "wrong credentials"
      })
    }


    return res.status(200).json({
      success: true,
      message: "logged in",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error,
    });
  }
};
