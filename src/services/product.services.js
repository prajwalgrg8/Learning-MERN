import Product from "../models/Product.js";

const getProducts = async () => {
    return await Product.find();
}

const getProductById = async (id) => {
    const product = await Product.findById(id);

    if(!product)
    {
        throw({
            message: "Product not found."
        });
    }

    return product;
}

const createProduct = async (data, userId) => {
    //create product using model
    return await Product.create({...data, createdBy: userId});
};

const updateProduct = async (id, data) => {
    const product = await Product.findById(id);

    if(!product)
    {
        throw({
            message: "Product not found."
        });
    }

    //new: true shows the instantly updated value instead of showing in next request
    return await Product.findByIdAndUpdate(id, data, {new : true});
};

const deleteProduct = async(id) => {
    const product = await Product.findById(id);

    if(!product)
    {
        throw({
            message: "Product not found."
        });
    }

    await Product.findByIdAndDelete(id, {new: true});

    return("Product deleted successfully.");

};

export default {createProduct, getProducts, getProductById, updateProduct, deleteProduct};