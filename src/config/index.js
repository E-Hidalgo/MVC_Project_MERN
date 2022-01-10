import { config } from "dotenv";

config();

const DB_URI = process.env.DB_URI;
const PORT = process.env.PORT;

module.exports = {
  DB_URI: DB_URI || "mongodb://localhost:27017/MERN_Project_Api-DB",
  PORT: PORT || 4000,
};
