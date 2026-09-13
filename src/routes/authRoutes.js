import express from "express";
import authControllers from "../controllers/authController.js"

const router = express.Router();

/**
 * Login
 * URL : /api/auth/login
 * HTTP method: POST
 */

router.post("/login", authControllers.login);

/**
 * Register
 * URL: /api/auth/register
 * HTTP method: POST
 */

router.post("/register", authControllers.register);

export default router;