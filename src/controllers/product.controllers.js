import productServices from "../services/product.services.js";

const getAllProducts = async (req, res) => {
  try {
    const products = await productServices.getProducts(req.query);

    res.json(products);
  } catch (error) {
    res.status(error.statusCode || 400).json(error.message);
  }
};

const getAllBrands = async (req, res) => {
  try {
    const products = await productServices.getAllBrands();

    res.json(products);
  } catch (error) {
    res.status(error.statusCode || 400).json(error.message);
  }
};

const getProductById = async (req, res) => {
  try {
    const brands = await productServices.getProductById(req.params.id);

    res.json(brands);
  } catch (error) {
    res.status(error.statusCode || 400).json(error.message);
  }
};

const createProduct = async (req, res) => {

    try{
        const createdProduct = await productServices.createProduct(req.body, req.user._id);

        res.status(201).json(createdProduct);
    }
    catch(error)
    {
        res.status(error.statusCode || 400).json(error.message);
    }
    
}

const updateProduct = async (req, res) => {
  try{
    const product = await productServices.updateProduct(req.params.id, req.body, req.user._id);

    res.json(product);
  }
  catch(error)
  {
    res.status(error.statusCode || 400).json(error.message);
  }
};

const deleteProduct = async (req, res) => {
  try{
    const data = await productServices.deleteProduct(req.params.id, req.user._id);

    res.json(data);
  }
  catch(error)
  {
    res.status(error.statusCode || 400).json(error.message);
  }
}

export default {createProduct, getAllProducts, getAllBrands, getProductById, updateProduct, deleteProduct};