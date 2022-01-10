import express from "express";
import routes from "./routes";

//? CREATE SERVER
const app = express();

//? ROUTES
app.use("/", routes);
//? SERVER PORT
app.listen(4000, () => {
  console.log(`Server listening on http:localhost:4000`);
});
