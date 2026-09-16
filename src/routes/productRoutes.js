import express from "express";
import productControllers from "../controllers/product.controllers";
import auth from "../middlewares/auth.js";
import roleBasedAuth from "../middlewares/roleBasedAuth.js";

const router = express.Router();

router.get("/", productControllers.getAllProducts);

router.get("/brands", productControllers.getAllBrands);

router/get("/:id", productControllers.getProductById);

router.post("/", auth, roleBasedAuth("MERCHANT"), productControllers.createProduct);

router.put("/:id", auth, roleBasedAuth("MERCHANT"), productControllers.updateProduct);

router.delete("/:id", auth, roleBasedAuth("MERCHANT"), productControllers.deleteProduct);

export default router;