import express from "express";
import clientsRouter from "./routes/clients.routes";
import "./DB";
import "./config";
import { PORT } from "./config";

//? CREATE SERVER
const app = express();

app.use(express.json());

//? ROUTES
app.use("/api/clients", clientsRouter);
//? SERVER PORT
app.listen(PORT, () => {
  console.log(`Server listening on http:localhost:${PORT}`);
});
