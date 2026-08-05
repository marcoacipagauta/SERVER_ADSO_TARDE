import { Router } from "../Dependencies/dependencias.ts";
import { getUsers,postUsers,putUsers,deleteUsers } from "../Controller/userController.ts";

const UserRouter = new Router();

UserRouter.get("/users",getUsers);
UserRouter.post("/users",postUsers);
UserRouter.put("/users/:id",putUsers);
UserRouter.delete("/users",deleteUsers);

export {UserRouter};


