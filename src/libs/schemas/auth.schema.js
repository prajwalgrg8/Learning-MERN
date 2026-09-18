import * as z from "zod";
import { userSchema } from "./user.schemas.js";

const logInSchema = z.object({
    email: z.email({
        error: (data) => data.input? "Invalid Email address" : "Email address is required",
    }),

    password: z.string({
        error: "Password is required."
    })
});

const registerSchema = userSchema;

export { logInSchema, registerSchema }