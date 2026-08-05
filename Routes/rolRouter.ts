import { Router } from "../Dependencies/dependencias.ts";
import { getRol,postRol,putRol,deleteRol } from "../Controller/rolController.ts";

const RolRouter = new Router();

RolRouter.get("/rol",getRol);
RolRouter.post("/rol",postRol);
RolRouter.put("/rol/:id",putRol);
RolRouter.delete("/rol",deleteRol);

export {RolRouter};
