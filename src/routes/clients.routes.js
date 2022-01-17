import { Router } from "express";
import {
  addClient,
  getClient,
  getClientById,
  updateClient,
  deleteClient,
} from "../controllers/clientsController";
import { authUser } from "../middleware/authUser";

const clientsRouter = Router();

//? CREATE NEW CLIENT
clientsRouter.post("/", authUser, addClient);

//? GET ALL CLIENTS
clientsRouter.get("/", authUser, getClient);

//? GET CLIENT BY ID
clientsRouter.get("/:clientId", authUser, getClientById);

//? UPDATE CLIENT BY ID
clientsRouter.put("/:clientId", authUser, updateClient);

//? DELETE CLIENT BY ID
clientsRouter.delete("/:clientId", authUser, deleteClient);

export default clientsRouter;
