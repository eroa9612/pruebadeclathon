import models from "../models";
import bcrypt from "bcryptjs";
import token from "../services/token";

export default {
  add: async (req, res, next) => {
    try {
      req.body.password = await bcrypt.hash(req.body.password, 10);
      const reg = await models.Users.create(req.body);
      res
        .status(200)
        .json({ msg: "Registro exitoso", status: "success", title: "Exito" });
    } catch (e) {
      res.status(500).send({
        msg: "Error al registrar",
        status: "error",
        title: "Lo sentimos",
      });
      next(e);
    }
  },

  update: async (req, res, next) => {
    try {
      let pwd = req.body.password;
      const reg0 = await models.Users.findById({ _id: req.body._id });
      if (pwd != reg0) {
        req.body.password = await bcrypt.hash(req.body.password, 10);
      }
      const reg = await models.Users.findByIdAndUpdate(
        {
          _id: req.body._id,
        },
        {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          rol: req.body.rol,
        }
      );
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrio un error",
      });
      next(e);
    }
  },

  list: async (req, res, next) => {
    try {
      const reg = await models.Users.find()
        .populate("rol", {
          name: 1,
        })
        .sort({
          createdAt: -1,
        });
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrio un error",
      });
      next(e);
    }
  },

  delete: async (req, res, next) => {
    try {
      const reg = await models.Users.findByIdAndDelete({ _id: req.query._id });
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrio un error",
      });
      next(e);
    }
  },
  //Search for user
  onlyUser: async (req, res, next) => {
    try {
      const reg = await models.Users.findById({
        _id: req.query._id,
      }).populate("rol", {
        name: 1,
      });
      if (!reg) {
        res.status(404).send({
          message: "El usuario no existe",
        });
      } else {
        res.status(200).json(reg);
      }
    } catch (e) {
      res.status(500).send({
        message: "Ocurrio un error",
      });
      next(e);
    }
  },

  login: async (req, res, next) => {
    try {
      let user = await models.Users.findOne({ email: req.body.email });
      if (user) {
        let match = await bcrypt.compare(req.body.password, user.password);
        let rol = await models.Roles.findOne({ _id: user.rol });
        if (match) {
          let tokenReturn = await token.encode(user._id, rol.name);
          res.status(200).json({
            tokenReturn,
            msg: "Login Exitoso",
            status: "success",
            title: "Bienvenido",
          });
        } else {
          res.status(401).json({
            msg: "Contraseña Incorrecta",
            status: "error",
            title: "Error",
          });
        }
      } else {
        res
          .status(404)
          .json({ msg: "Usuario no existe", status: "error", title: "Error" });
      }
    } catch (e) {
      res.status(500).json({
        msg: "Ocurrio un error",
        status: "error",
        title: "Presentamos fallas",
      });
      next(e);
    }
  },
};
