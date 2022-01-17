import { Router } from "express";
import { addUser, loginUser } from "../controllers/usersController";
const usersRouter = Router();

//? CREATE NEW User
usersRouter.post("/new-account", addUser);
//? CREATE NEW User
usersRouter.post("/login", loginUser);

export default usersRouter;
