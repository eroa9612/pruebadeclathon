import mongoose, { Schema } from "mongoose";

const usersSchema = new Schema({
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  rol: {
    type: Schema.ObjectId,
    ref: "roles",
    default: "6111ef28359f54207a0b7bd7",
  },
});

const User = mongoose.model("users", usersSchema);

export default User;
