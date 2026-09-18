import express from "express";
import authControllers from "../controllers/authController.js"
import validate from "../middlewares/validator.js";
import { logInScHema, registerSchema } from "../libs/schemas/auth.schema.js";

const router = express.Router();

/**
 * Login
 * URL : /api/auth/login
 * HTTP method: POST
 */

router.post("/login", validate(logInScHema), authControllers.login);

/**
 * Register
 * URL: /api/auth/register
 * HTTP method: POST
 */

router.post("/register", registerSchema, authControllers.register);

router.post("/logout", authControllers.logout);

export default router;