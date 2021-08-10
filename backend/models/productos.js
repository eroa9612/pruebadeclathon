import mongoose, { Schema } from "mongoose";

const productosSchema = new Schema({
  name: { type: String },
  precio: { type: String },
  img: { type: String },
});

const Productos = mongoose.model("productos", productosSchema);

export default Productos;
