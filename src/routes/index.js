import { Router } from "express";
import { newClient, getClients } from "../controllers/clientsController"
const router = Router();

//? GET HOME PAGE
router.get("/", (req, res) => {
  res.send("This is home");
});

router.get("/about", (req, res) => {
  res.send("This is about");
});

//? GET ALL CLIENTS
router.get("/clients", getClients);

//? CREATE NEW CLIENT
router.post("/clients", newClient)

export default router;
