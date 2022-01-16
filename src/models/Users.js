import { Schema, model } from "mongoose";

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

export default model("Users", usersSchema);