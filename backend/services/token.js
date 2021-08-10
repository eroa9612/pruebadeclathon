import jwt from "jsonwebtoken";
import models from "../models";

export default {
  encode: async (_id, rol) => {
    const token = jwt.sign({ _id, rol }, "clavesecreta", { expiresIn: "4h" });
    return token;
  },

  decode: async (token) => {
    try {
      const { _id } = await jwt.verify(token, "clavesecreta");
      const user = await models.Users.findOne({ _id });
      if (user) {
        return user;
      } else {
        return false;
      }
    } catch (error) {}
  },
};
