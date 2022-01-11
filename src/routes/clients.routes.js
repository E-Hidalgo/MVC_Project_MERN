import { Router } from "express";
import {
  addClient,
  getClient,
  getClientById,
  updateClient,
  deleteClient,
} from "../controllers/clientsController";
const clientsRouter = Router();

//? CREATE NEW CLIENT
clientsRouter.post("/", addClient);

//? GET ALL CLIENTS
clientsRouter.get("/", getClient);

//? GET CLIENT BY ID
clientsRouter.get("/:clientId", getClientById);

//? UPDATE CLIENT BY ID
clientsRouter.put("/:clientId", updateClient);

//? DELETE CLIENT BY ID
clientsRouter.delete("/:clientId", deleteClient);

export default clientsRouter;
