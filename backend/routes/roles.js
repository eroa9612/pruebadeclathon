import routerx from "express-promise-router";
import rolesController from "../controllers/RolesController";
import auth from "../middlewares/verifyToken";

const router = routerx();

router.post("/add", auth.verifyAdmin, rolesController.add);

router.get("/list", auth.verifyAdmin, rolesController.list);

router.get("/onlyrol", auth.verifyAdmin, rolesController.onlyRoles);

router.put("/update", auth.verifyAdmin, rolesController.update);

router.delete("/delete", auth.verifyAdmin, rolesController.delete);

export default router;
