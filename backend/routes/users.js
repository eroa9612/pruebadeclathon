import routerx from "express-promise-router";
import usersController from "../controllers/UsersController";
import auth from "../middlewares/verifyToken";

const router = routerx();

router.post("/add", usersController.add);

router.post("/login", usersController.login);

router.get("/list", auth.verifyAdmin, usersController.list);

router.post("/onlyuser", auth.verifyUser, usersController.onlyUser);

router.put("/update", auth.verifyUser, usersController.update);

router.delete("/delete", auth.verifyAdmin, usersController.delete);

export default router;
