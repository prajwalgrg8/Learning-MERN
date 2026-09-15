import productServices from "../services/product.services.js";

const getAllProducts = async (req, res) => {
  try {
    const products = await productServices.getProducts();

    res.json(products);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const createProduct = async (req, res) => {

    try{
        const createdProduct = await productServices.createProduct();

        res.json(createdProduct);
    }
    catch(error)
    {
        res.status(400).json(error.message);
    }
    
}

export default {createProduct, getAllProducts};