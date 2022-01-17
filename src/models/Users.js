import { Schema, model } from "mongoose";
import Bcrypt from "bcryptjs"

const usersSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    trim: true,
  },
});

// ------------ GEN SALT AND HASH PASSWORD ----------

usersSchema.statics.encryptPassword = async (password) => {

  const salt = await Bcrypt.genSalt(10)
  return await Bcrypt.hash(password, salt)
}

// ------------ COMPARE PASSWORDS ----------

usersSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await Bcrypt.compare(password, receivedPassword)
}

export default model("Users", usersSchema);