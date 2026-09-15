import express from "express";
import productControllers from "../controllers/product.controllers";
import auth from "../middlewares/auth.js";
import roleBasedAuth from "../middlewares/roleBasedAuth.js";

const router = express.Router();

router.get("/", productControllers.getAllProducts);

router.post("/", auth, roleBasedAuth("CUSTOMER"), productControllers.createProduct);

export default router;