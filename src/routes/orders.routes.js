import { Router } from "express";
import {
  addOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} from "../controllers/ordersController";
const ordersRouter = Router();

//? CREATE NEW order
ordersRouter.post("/", addOrder);

//? GET ALL orderS
ordersRouter.get("/", getOrders);

//? GET order BY ID
ordersRouter.get("/:orderId", getOrderById);

//? UPDATE order BY ID
ordersRouter.put("/:orderId", updateOrder);

//? DELETE order BY ID
ordersRouter.delete("/:orderId", deleteOrder);

export default ordersRouter;
