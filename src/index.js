import express from "express";
import routes from "./routes";
import "./DB";
import "./config";
import { PORT } from "./config";

//? CREATE SERVER
const app = express();

app.use(express.json());

//? ROUTES
app.use("/", routes);
//? SERVER PORT
app.listen(PORT, () => {
  console.log(`Server listening on http:localhost:${PORT}`);
});
