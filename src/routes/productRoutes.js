import express from "express";
import productControllers from "../controllers/product.controllers";
import auth from "../middlewares/auth.js";
import roleBasedAuth from "../middlewares/roleBasedAuth.js";

const router = express.Router();

router.get("/", productControllers.getAllProducts);

router/get("/:id", productControllers.getProductById);

router.post("/", auth, roleBasedAuth("CUSTOMER"), productControllers.createProduct);

router.put("/:id", productControllers.updateProduct);

router.delete("/:id", productControllers.deleteProduct);

export default router;