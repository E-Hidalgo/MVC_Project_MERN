import mongoose from "mongoose";
import { DB_URI } from "../config";

mongoose
  .connect(DB_URI)
  .then(() => console.log(`DB connected to ${DB_URI}`))
  .catch((err) => console.log(err));
