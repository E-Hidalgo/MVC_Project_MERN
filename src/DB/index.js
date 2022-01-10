import mongoose from "mongoose";
import { DB_URI } from "../config";

mongoose
  .connect(DB_URI)
  .then((db) => console.log("DB CONNECTED"))
  .catch((err) => console.log(err));
