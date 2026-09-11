import express from "express";
import userController from "../controllers/user.controllers.js"

const router = express.Router(); //Initializing Route

router.get("/", userController.getUsers);

router.get("/first", userController.getFirstUser);

//Dynamic route parameter
router.get("/:userId", userController.getUserById);

router.post("/", userController.createUser);

export default router;