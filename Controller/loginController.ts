import { Context } from "../Dependencies/dependencias.ts";
import { Usuario } from "../Model/userModel.ts";
import { CrearToken } from "../Helpers/Jwt.ts";


export const postLogin = async(ctx:Context)=>{
    const {request, response} = ctx;

    try {
        const contentLength = request.headers.get("Content-Length");
        // verificamos si el cuerpo de la solicitud contiene informacion
        if (contentLength === "0"){
            response.status = 400;
            response.body = {success: false, msg: "Cuerpo de la solicitud vacío"};
            return;
        }

        const body = await request.body.json();
        // validar si tenemos email y contraseña
        if (!body.email || !body.password){
            response.status = 400;
            response.body = {success: false, msg:"faltan datos (email o contraseña)"};
            return;
        }


        const ObjUsuario = new Usuario(null, null, { email: body.email, password: body.password });
        const result = await ObjUsuario.iniciarSesion();

        if (result.success && result.data){
            const token = await CrearToken(result.data.idusuario);
            response.status = 200;
            response.body = {
                success: true,
                accessToken: token,
                data: `${result.data.nombres} ${result.data.apellidos}`,
            };
        }else{
            response.status = 401;
            response.body = {
                success: false,
                message: "credenciales incorrectas",
            }
        }

    } catch (error) {
        response.status = 500;
        response.body = {success: false, message: "error interno del servidor"+error};
    }
}