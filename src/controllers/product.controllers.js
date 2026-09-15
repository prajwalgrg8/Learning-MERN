import productServices from "../services/product.services.js";

const getAllProducts = async (req, res) => {
  try {
    const products = await productServices.getProducts();

    res.json(products);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getProductById = async (req, res) => {
  try {
    const products = await productServices.getProductById(req.params.id);

    res.json(products);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const createProduct = async (req, res) => {

    try{
        const createdProduct = await productServices.createProduct(req.body, req.user._id);

        res.json(createdProduct);
    }
    catch(error)
    {
        res.status(400).json(error.message);
    }
    
}

const updateProduct = async (req, res) => {
  try{
    const product = await productServices.updateProduct(req.params.id, req.body);

    res.json(product);
  }
  catch(error)
  {
    res.status(400).json(error.message);
  }
};

const deleteProduct = async (req, res) => {
  try{
    const product = await productServices.deleteProduct(req.params.id);

    res.json(product);
  }
  catch(error)
  {
    res.status(400).json(error.message);
  }
}

export default {createProduct, getAllProducts, getProductById, updateProduct, deleteProduct};