import express from "express";
import clientsRouter from "./routes/clients.routes";
import productsRouter from "./routes/products.routes";
import ordersRouter from "./routes/orders.routes";
import "./DB";
import { PORT } from "./config";

import cors from "cors"

//? CREATE SERVER
const app = express();

app.use(express.json());

//? CORS
app.use(cors());


//? ROUTES
app.use("/api/clients", clientsRouter);
app.use("/api/products", productsRouter);
app.use("/api/orders", ordersRouter);
//? SERVER PORT
app.listen(PORT, () => {
  console.log(`Server listening on http:localhost:${PORT}`);
});
