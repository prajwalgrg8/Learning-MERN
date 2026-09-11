import mongoose from "mongoose";

//Products table blueprint
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
  },
  
  brand: String,

  category: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: [true, "Price is required."],
    min: [1, "Price must be greater than 0"],
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },

  stock: {
    type: Number,
    default: 1,
    min: 0
  },
   
  description: String,
  imageUrls: [String],

});

/**
 * Two parameter 
 * Model name and schema name
 */
export default mongoose.model("Product", productSchema);


