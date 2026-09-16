import Product from "../models/Product.js";

const getProducts = async (query) => {

    const limit = query?.limit;

    const sort = query?.sort? JSON.parse(query.sort) : null;

    const offset = query?.offset;

    //Filter
    const filters = {};
    if (query?.category) filters.category = query?.category;
    if (query?.createdBy) filters.createdBy = query?.createdBy;
    if (query?.brand) filters.brand = { $in: query?.brands.splits(",")};
    if (query?.name) filters.name = {$regex:query?.name, $options: "i"}; //options i is case insensetive
    if(query?.min) filters.price = {$gte: query?.min};
    if(query?.max) filters.price = {...filters.price, $lte: query?.max};

    // const category = query?.category; //category filter
    // const brand = query?.brand; //brand filter

    return await Product.find(filters).limit(limit).sort(sort).skip(offset);
    
    // return await Product.find({category, brand}).limit(limit).sort(sort).skip(offset);
    // return await Product.find({category, brand : {$in: brand.split(",")} }).limit(limit).sort(sort).skip(offset);
}

const getAllBrands = async () => {
  return await Product.distinct("brand");
};

const getProductById = async (id) => {
    const product = await Product.findById(id);

    if(!product)
    {
        throw({
            statusCode: 404,
            message: "Product not found."
        });
    }

    return product;
}

const createProduct = async (data, userId) => {
    //create product using model
    return await Product.create({...data, createdBy: userId});
};

const updateProduct = async (id, data, userId) => {
    const product = await Product.findById(id);

    if(!product)
    {
        throw({
            statusCode: 404,
            message: "Product not found."
        });
    }

    if(product.createdBy.toString() != userId)
    {
        throw({
            statusCode: 403,
            message: "Access denied."
        });
    }

    //new: true shows the instantly updated value instead of showing in next request
    return await Product.findByIdAndUpdate(id, data, {new : true});
};

const deleteProduct = async(id, userId) => {
    const product = await Product.findById(id);

    if(!product)
    {
        throw({
            statusCode: 404,
            message: "Product not found."
        });
    }

    if(product.createdBy.toString() != userId)
    {
        throw({
            statusCode: 403,
            message: "Access denied."
        });
        
    }

    await Product.findByIdAndDelete(id, {new: true});

    return("Product deleted successfully.");

};

export default {createProduct, getProducts, getAllBrands, getProductById, updateProduct, deleteProduct};