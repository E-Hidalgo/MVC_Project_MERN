import { Router } from "express";
import {
  addOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} from "../controllers/ordersController";
import { authUser } from "../middleware/authUser";

const ordersRouter = Router();

//? CREATE NEW order
ordersRouter.post("/", authUser, addOrder);

//? GET ALL orderS
ordersRouter.get("/", authUser, getOrders);

//? GET order BY ID
ordersRouter.get("/:orderId", authUser, getOrderById);

//? UPDATE order BY ID
ordersRouter.put("/:orderId", authUser, updateOrder);

//? DELETE order BY ID
ordersRouter.delete("/:orderId", authUser, deleteOrder);

export default ordersRouter;
