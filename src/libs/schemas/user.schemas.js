import * as z from "zod";
import { passwordRegex } from "../../constants/regex";
import { ROLE_ADMIN, ROLE_CUSTOMER, ROLE_MERCHANT } from "../../constants/roles";

const addressSchema = z.object(
  {
    city: z.string().trim(),

    province: z.string().optional().trim(),

    street: z.string().optional().trim(),

    country: z.string().optional().trim(),
  },
  {
    error: "Address is required.",
  },
);

const userSchema = z.object({
  name: z.string({ error: "Username is required."})
    .trim()
    .check(z.minLength(3), z.maxLength(50)),

  email: z.email({ error: (data) => data.input? "Invalid email address." : "Email address is required."})
    .trim()
    .check(z.minLength(5), z.maxLength(100), z.lowercase()),

  password: z.string({ error: "Password is required."})
    .trim()
    .check(z.minLength(6, { error: "Password must be greatert than 6."}), z.maxLength(100))
    .z.regex(passwordRegex, { error: "Password must contain upper, lowercase, number and special character."}),

  roles: z.array(z.enum([ROLE_CUSTOMER, ROLE_ADMIN, ROLE_MERCHANT])).optional(),

  phone: z.string({ error: "Phone number is required."}).trim(),

  address: addressSchema,

  isActive: z.boolean().optional(),
});

export { userSchema };

