import { Router } from "express";
import {
  addProduct,
  uploadImage,
  getProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  searchProduct,
} from "../controllers/productsController";
const productsRouter = Router();

//? CREATE NEW PRODUCT
productsRouter.post("/", uploadImage, addProduct);

//? GET ALL productS
productsRouter.get("/", getProduct);

//? GET product BY ID
productsRouter.get("/:productId", getProductById);

//? GET product with Query
productsRouter.post("/:query", searchProduct);

//? UPDATE product BY ID
productsRouter.put("/:productId", uploadImage, updateProduct);

//? DELETE product BY ID
productsRouter.delete("/:productId", deleteProduct);

export default productsRouter;
