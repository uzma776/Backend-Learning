import { response } from "express";
import Product from "../models/productsModel.js";
export const createProduct = async (req, res) => {
  try {
    const { title, description, price, stocks, category, image } = req.body;
    console.log(title, description, price, stocks, category, image);
    if (!title || !description || !price || !category || !image) {
      return res.status(401).json({
        success: false,
        message: "every fiels is required something you are missing to enter",
      });
    }

    const product = await Product.create({
      title,
      description,
      price,
      stocks,
      category,
      image,
    });
    if (!product) {
      return res.status(401).json({
        success: false,
        message: "product not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "products created successfully",
      product,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error,
    });
  }
};
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    if (!products) {
      return res.status(401).json({
        success: false,
        message: "Products not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "products found",
      products,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(401).json({
        success: false,
        message: "Product not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "product found",
      product,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};
export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!product) {
      return response.status(401).json({
        success: true,
        message: "product not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "product updated",
      product,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id)
    if (!product) {
      return response.status(401).json({
        success: true,
        message: "product not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "product deleted",
      product,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};