import { VerificarTokenAcceso } from "../Helpers/Jwt.ts";
import { Context,Next} from "../Dependencies/dependencias.ts";

// Middleware para proteger rutas
export async function authMiddleware(ctx: Context, next:Next){

    const authHeader = ctx.request.headers.get("Authorization");

    if (!authHeader){
        ctx.response.status = 401;
        ctx.response.body = {error: "No autorizado"};
        return;
    }

    const token = authHeader.split(" ")[1];
    const usuario = await VerificarTokenAcceso(token);

    if (!usuario){
        ctx.response.status = 401;
        ctx.response.body = {error: "Token inválido o expirado"};
        return;
    }

    ctx.state.user = usuario;
    await next();
}
