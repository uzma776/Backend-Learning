/** @format */

// /** @format */

/** @format */

import dotenv from "dotenv";
dotenv.config();
import productRouter from "./routers/productsRouter.js";


import express from "express";
import { Connection } from "./db/conn.js";
import dns from "dns";
import userRouter from "./routers/userRouter.js";
//changing server
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();

console.log("Mongo URI:", process.env.MONGODB_URI);

Connection();

const port = process.env.PORT;
app.use(express.json());
app.use("/api/v1/product", productRouter);
app.use("/api/v1/user", userRouter);
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
//http://localhost:8000/api/v1/product/create-product
