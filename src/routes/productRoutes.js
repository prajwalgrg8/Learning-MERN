import express from "express";
import productControllers from "../controllers/product.controllers";

const router = express.Router();

router.post("/products", productControllers.createProduct);

export default router;