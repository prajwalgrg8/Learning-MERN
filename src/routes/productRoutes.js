import express from "express";
import productControllers from "../controllers/product.controllers";
import auth from "../middlewares/auth.js";
import roleBasedAuth from "../middlewares/roleBasedAuth.js";
import { productSchema } from "../libs/product.schema.js";
import validate from "../middlewares/validator.js";

const router = express.Router();

router.get("/", productControllers.getAllProducts);

router.get("/brands", productControllers.getAllBrands);

router/get("/:id", productControllers.getProductById);

router.post("/", auth, roleBasedAuth("MERCHANT"), validate(productSchema), productControllers.createProduct);

router.put("/:id", auth, roleBasedAuth("MERCHANT"), productControllers.updateProduct);

router.delete("/:id", auth, roleBasedAuth("MERCHANT"), productControllers.deleteProduct);

export default router;