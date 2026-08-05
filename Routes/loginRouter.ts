import { Router } from "../Dependencies/dependencias.ts";
import { getLogin } from "../Controller/loginController.ts";

const LoginRouter = new Router();

LoginRouter.get("/rol",getLogin);

export {LoginRouter};