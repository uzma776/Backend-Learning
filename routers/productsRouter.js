/** @format */

import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "../Controller/productsController.js";

const productRouter = express.Router();
productRouter.post("/create-product", createProduct);
productRouter.get("/get-all-products", getAllProducts);
productRouter.get("/product-detail/:id", getProductById);
productRouter.patch("/update-product/:id", updateProduct);
productRouter.delete("/delete-product/:id", deleteProduct);

export default productRouter;
