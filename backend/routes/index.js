import routerx from "express-promise-router";
import rolesRouter from "./roles";
import usersRouter from "./users";
import productosRouter from "./productos";

const router = routerx();

router.use("/users", usersRouter);
router.use("/roles", rolesRouter);
router.use("/productos", productosRouter);

export default router;
