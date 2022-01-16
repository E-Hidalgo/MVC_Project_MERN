import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const usersSchema = new Schema({
  email: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true,
  },
  name: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});

usersSchema.statics.encryptPassword = async (password) => {
  console.log(password);
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};
usersSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword);
};

export default model("Users", usersSchema);
