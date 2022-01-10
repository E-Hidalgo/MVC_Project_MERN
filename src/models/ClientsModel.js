import mongoose from "mongoose";

const Schema = moongose.Schema;

const clientSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  company: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    trim: true,
  },
});

export default mongoose.model("ClientsModel", clientSchema);
