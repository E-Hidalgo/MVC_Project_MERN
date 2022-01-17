import { Router } from "express";
import {
  addUser,
  getUsers,
  Login,
  getUserById,
  updateUser,
  deleteUser,
  searchUser,
} from "../controllers/usersController";
const usersRouter = Router();

//? CREATE NEW PRODUCT
usersRouter.post("/new-account", addUser);

// //? GET ALL users
// usersRouter.get("/", getUsers);

// //? GET ALL users

usersRouter.post("/login", Login);

// //? GET product BY ID
// usersRouter.get("/:userId", getUserById);

// //? GET User with Query
// usersRouter.post("/:query", searchUser);

// //? UPDATE User BY ID
// usersRouter.put("/:userId", updateUser);

// //? DELETE User BY ID
// usersRouter.delete("/:userId", deleteUser);

export default usersRouter;
