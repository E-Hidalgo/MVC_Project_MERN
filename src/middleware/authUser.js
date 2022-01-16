import jwt from "jsonwebtoken";
import config from "../config";

export const authUser = (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    const error = new Error("Not authorized, please login");
    error.statusCode = 401;
    throw error;
  }

  const token = authHeader.split(" ")[1];

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
