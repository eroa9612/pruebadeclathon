import jwt from "jsonwebtoken";
import moment from "moment";
let secretToken = "clavesecreta";
export default {
  verifyAdmin: async (req, res, next) => {
    let payload = jwt.decode(req.headers.token, secretToken);
    if (!req.headers.token) {
      return res.status(401).send({
        message: "Sin Cabacera De Autenticacion",
      });
    } else if (payload.exp <= moment().unix()) {
      return res.status(402).send({
        message: "Token Expirado",
      });
    } else if (payload.rol === "Admin") {
      next();
    } else {
      return res.status(403).send({
        message: "No Tiene Permisos Para Acceder A La Información",
      });
    }
  },
  verifyUser: async (req, res, next) => {
    let payload = jwt.decode(req.headers.token, secretToken);
    if (!req.headers.token) {
      return res.status(401).send({
        message: "Sin Cabacera De Autenticacion",
      });
    } else if (payload.exp <= moment().unix()) {
      return res.status(402).send({
        message: "Token Expirado",
      });
    } else if (payload.rol === "User" || payload.rol === "Admin") {
      next();
    } else {
      return res.status(403).send({
        message: "No Tiene Permisos Para Acceder A La Información",
      });
    }
  },
};
