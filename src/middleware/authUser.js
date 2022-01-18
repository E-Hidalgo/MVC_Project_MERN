import jwt from "jsonwebtoken";
import config from "../config/index";

export const authUser = (req, res, next) => {
  const authHeader = req.get("Authorization");
  console.log(authHeader);
  if (!authHeader) {
    const error = new Error("Unauthorized, please login");
    error.statusCode = 401;
    throw error;
  }
  const token = authHeader.split(" ")[1];
  console.log(token);
  let authToken;
  try {
    authToken = jwt.verify(token, config.SECRET);
  } catch (error) {
    error.statusCode = 500;
    throw error;
  }
  if (!authToken) {
    const error = new Error("Not authenticated");
    error.statusCode = 401;
    throw error;
  }
  next();
};
