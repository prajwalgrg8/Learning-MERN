import express from "express";
import userController from "../controllers/user.controllers.js"

const router = express.Router(); //Initializing Route

router.get("/users", userController.getUsers);

router.get("/users/first", userController.getFirstUser);

//Dynamic route parameter
router.get("users/:userId", userController.getUserById);

export default router;