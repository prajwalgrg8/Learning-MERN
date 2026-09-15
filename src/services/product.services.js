import Product from "../models/Product.js";

const getProducts = async () => {
    return await Product.find();
}

const createProduct = async () => {
    //create product using model
    return await Product.create({
        name: "iPhone 18 pro",
        brand: "Apple",
        category: "Mobile", 
        price: 180000,
    });

};

export default {createProduct, getProducts};