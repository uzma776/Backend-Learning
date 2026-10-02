/** @format */

import mongoose from "mongoose";
import User from "../models/userModel.js";
import { response } from "express";
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
    if (!name || !email || !password || !role || !profile) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "user not created",
      });
    }
    return res.status(200).json({
      success: true,
      message: "user created",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error,
    });
  }
};
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!email || !password) {
      return res.status(401).json({
        success: false,
        message: "all fields are required",
      });
    }

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "user not found",
      });
    }
    const isPasswordMatched = User.comparePassword(password)

    if (!isPasswordMatched) {
      return res.status(401).json({
        success: true,
        message: "wrong credentials",
      });
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
export const userProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "user not found",
      });
    }
    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error,
    });
  }
};
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (!users) {
      return res.status(400).json({
        success: false,
        message: "user not found",
      });
    }
    return res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error,
    });
  }
};
export const updateProfile = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id,req.body,{new: true ,runValidators: true})
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "user not found",
      });
    }
    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error,
    });
  }
};
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "user not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "user deleted"
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error,
    });
  }
};
