import mongoose from "mongoose";
import { DB_URI } from "../config";

//? ASYNC AWAIT PROMISE PIM PAM
mongoose.Promise = global.Promise;
mongoose.connect(DB_URI)
  //TODO , {useNewUrlparser : true};
  .then(() => console.log(`DB connected to ${DB_URI}`))
  .catch((err) => console.log(err));
