import express from "express";
import userController from "../controllers/user.controllers.js"
import validate from "../middlewares/validator.js";
import { userSchema } from "../libs/schemas/user.schemas.js";

const router = express.Router(); //Initializing Route

router.get("/", userController.getUsers);

router.get("/first", userController.getFirstUser);

//Dynamic route parameter
router.get("/:userId", userController.getUserById);

router.post("/", validate(userSchema), userController.createUser);

export default router;