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
import { authUser } from "../middleware/authUser";

const productsRouter = Router();

//? CREATE NEW PRODUCT
productsRouter.post("/", [authUser, uploadImage], addProduct);

//? GET ALL productS
productsRouter.get("/", authUser, getProduct);

//? GET product BY ID
productsRouter.get("/:productId", authUser, getProductById);

//? GET product with Query
productsRouter.post("/search/:query", authUser, searchProduct);

//? UPDATE product BY ID
productsRouter.put("/:productId", [authUser, uploadImage], updateProduct);

//? DELETE product BY ID
productsRouter.delete("/:productId", authUser, deleteProduct);

export default productsRouter;
