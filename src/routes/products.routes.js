import { Router } from "express";
import {
  uploadImage,
  addProduct,
  getProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/productsController";
const productsRouter = Router();

//? CREATE NEW PRODUCT
productsRouter.post("/",
  uploadImage,
  addProduct);

//? GET ALL productS
productsRouter.get("/", getProduct);

//? GET product BY ID
productsRouter.get("/:productId", getProductById);

//? UPDATE product BY ID
productsRouter.put("/:productId", updateProduct);

//? DELETE product BY ID
productsRouter.delete("/:productId", deleteProduct);

export default productsRouter;
