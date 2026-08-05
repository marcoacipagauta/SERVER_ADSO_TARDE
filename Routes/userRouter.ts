import { Router } from "../Dependencies/dependencias.ts";
import { getUsers,postUsers,putUsers,deleteUsers } from "../Controller/userController.ts";
import {authMiddleware} from "../Middlewares/validateJWT.ts"

const UserRouter = new Router();

UserRouter.get("/users",authMiddleware,getUsers);
UserRouter.post("/users",authMiddleware,postUsers);
UserRouter.put("/users/:id",authMiddleware,putUsers);
UserRouter.delete("/users",authMiddleware,deleteUsers);

export {UserRouter};


