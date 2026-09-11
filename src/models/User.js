import mongoose from "mongoose";

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
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

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
    enum: ["CUSTOMER", "MERCHANT", "ADMIN", "SUPER_ADMIN"],
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

  createdAt: {
    type: Date,
    default: Date.now()
  }

});

export default mongoose.model("User", userSchema);