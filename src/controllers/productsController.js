import Products from "../models/Products.js";
import upload from "../config/multerConfig.js";

/**
 * This function add products to the database
 * @param {*} req request  {body}
 * @param {*} res response {json}
 * @param {*} next
 */
export const addProduct = async (req, res, next) => {
  try {
    console.log(req.body)
    const { name, description, price, image } = req.body;
    const newProduct = new Products({ name, description, price, image });
    if (req.file.filename) {
      newProduct.image = req.file.filename;
    }
    await newProduct.save();
    res.json({ message: "Added!" });
  } catch (error) {
    console.log(error);
    next();
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const uploadImage = (req, res, next) => {
  upload(req, res, function (error) {
    if (error) {
      res.json({ message: "Something went wrong", error: error });
    } else {
      return next();
    }
  });
};

/**
 * This function get all products in the database
 * @param {*} req
 * @param {*} res response {json}
 * @param {*} next
 */
export const getProduct = async (req, res, next) => {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (error) {
    console.log(error);
    next();
  }
};

/**
 * This function get a product by Id from the database
 * @param {*} req request  {params}
 * @param {*} res response {json}
 * @param {*} next
 */
export const getProductById = async (req, res, next) => {
  try {
    const product = await Products.findById(req.params.productId);
    product ? res.json(product) : res.json({ message: "product not found" });
  } catch (error) {
    console.log(error);
    next();
  }
};

/**
 * This function update a product by id
 * @param {*} req {req.params.productId}
 * @param {*} res {json(product)}
 * @param {*} next
 */
export const updateProduct = async (req, res, next) => {
  try {
    console.log(req.file);
    if (req.file !== undefined && req.file.filename) {
      req.body.image = req.file.filename;
    }

    const product = await Products.findByIdAndUpdate(
      req.params.productId,
      req.body,
      { new: true }
    );
    res.json(product);
  } catch (error) {
    console.log(error);
    next();
  }
};

/**
 * This function delete a product by id
 * @param {*} req {req.params.productId}
 * @param {*} res {json(message)}
 * @param {*} next
 */
export const deleteProduct = async (req, res, next) => {
  try {
    await Products.findByIdAndDelete(req.params.productId);
    //todo implement DELETE IMAGES TOO
    res.json({ message: "Deleted!" });
  } catch (error) {
    console.log(error);
    next();
  }
};

/**
 * This function uploads a product image
 * @param {*} req request  {params}
 * @param {*} res response {json}
 * @param {*} next
 */
export const searchProduct = () => { }