import models from "../models";

export default {
  add: async (req, res, next) => {
    try {
      const reg = await models.Productos.create(req.body);
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrio un error",
      });
      next(e);
    }
  },

  update: async (req, res, next) => {
    try {
      const reg = await models.Productos.findByIdAndUpdate(
        { _id: req.body._id },
        { name: req.body.name },
        { precio: req.body.precio },
        { img: req.body.img }
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
      const reg = await models.Productos.find();
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
      const reg = await models.Productos.findByIdAndDelete({
        _id: req.query._id,
      });
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrio un error",
      });
      next(e);
    }
  },

  onlyProducto: async (req, res, next) => {
    try {
      const reg = await models.Productos.findById({
        _id: req.query._id,
      });
      if (!reg) {
        res.status(404).send({
          message: "El registro no existe",
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
};
