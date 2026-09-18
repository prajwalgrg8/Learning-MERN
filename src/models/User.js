import mongoose from "mongoose";
import { emailRegex } from "../constants/regex.js";
import { ROLE_ADMIN, ROLE_CUSTOMER, ROLE_MERCHANT } from "../constants/roles.js";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
  },

  email: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 100,
    unique: true,
    lowercase: true,
    validate: {
        validator: (value) => {
            return emailRegex.test(value);
        },
        message: "Invalid email address."
    } 
  },

  password: {
    type: String,
    required: [true, "Password is required."],
  },

  role: {
    type: [String],
    default: ["CUSTOMER"],
    enum: [ROLE_CUSTOMER, ROLE_MERCHANT, ROLE_ADMIN],
  },

  phone: {
    type: String,
    required: [true, "Phone number is required."],
    maxLength: 15,
    minLength: 6,
    unique: true,
  },

  address: {
    city: {
      type: String,
      required: true,
    },
    province: String,
    street: String,
    country: {
        type: String,
        default: "Nepal"
    }
  },

  isActive: {
    type: Boolean,
    default: true
  },

  createdAt: {
    type: Date,
    default: Date.now()
  }

});

export default mongoose.model("User", userSchema);