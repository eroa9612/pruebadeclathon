import mongoose, { Schema } from "mongoose";

const rolesSchema = new Schema({
  name: { type: String },
});

const Roles = mongoose.model("roles", rolesSchema);

export default Roles;
