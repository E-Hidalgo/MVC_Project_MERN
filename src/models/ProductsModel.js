import { Schema, model } from "mongoose";

const productsSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  descrption: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
    trim: true,
  },
  image: {
    type: String,
    unique: true,
  },
});

export default model("productsModel", productsSchema);
