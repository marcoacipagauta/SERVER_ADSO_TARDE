import { Application, oakCors } from "./Dependencies/dependencias.ts";
import { UserRouter } from "./Routes/userRouter.ts";
import { RolRouter } from "./Routes/rolRouter.ts";
import { LoginRouter } from "./Routes/loginRouter.ts";
const app = new Application();

app.use(oakCors({
    origin:"*"
}));


const routes = [UserRouter,RolRouter,LoginRouter];

routes.forEach(router =>{
    app.use(router.routes());
    app.use(router.allowedMethods());
})

console.log("Servidor corriendo por el puerto 8001");

app.listen({port: 8001});