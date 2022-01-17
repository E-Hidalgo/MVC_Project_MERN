import jwt from "jsonwebtoken"
import config from "../config"

// !------------ AUTH USER WITH JWT SEE .ENV ----------

const authUser = (req, res, next) => {
  const authHeader = req.get("Authorization")
  if (!authHeader) {
    const error = new Error("Not authorized, please login")
    error.statusCode = 401
    throw error;
  }

  const token = authHeader.split(" ")

  let authToken;

  try {
    authToken = jwt.verify(token, config.SECRET)
  } catch (error) {

  }
}