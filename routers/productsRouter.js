import express from "express";
import { createProduct, getAllProducts, getProductById } from "../Controller/productsController.js";

const productRouter = express.Router()
productRouter.post("/create-product", createProduct);
productRouter.get("/get-all-products", getAllProducts)
productRouter.get("/product-detail/:id", getProductById)

export default productRouter