import routerx from "express-promise-router";
import productosController from "../controllers/ProductosController";
import auth from "../middlewares/verifyToken";

const router = routerx();

router.post("/add", auth.verifyAdmin, productosController.add);

router.get("/list", auth.verifyAdmin, productosController.list);

router.get("/onlyproducto", auth.verifyAdmin, productosController.onlyProducto);

router.put("/update", auth.verifyAdmin, productosController.update);

router.delete("/delete", auth.verifyAdmin, productosController.delete);

export default router;
