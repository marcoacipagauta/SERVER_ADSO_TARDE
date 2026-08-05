import { Context } from "../Dependencies/dependencias.ts";
import { Rol } from "../Model/rolModel.ts";

export const getRol = async(ctx:Context)=>{
    const {response} = ctx;

    try {
        const ObjRol =  new Rol();
        const ListaRoles = await ObjRol.SeleccionarRoles();
        response.status = 200;
        response.body = {
            success: true,
            data:ListaRoles,
        }
    } catch (error) {
        response.status = 400;
        response.body = {
            success: false,
            message: "error al procesar la solicitud ",
            errors: error
        }
    }

}

export const postRol = async(ctx:Context)=>{
    const {response} = ctx;

}

export const putRol = async(ctx:Context)=>{
    const {response} = ctx;

}

export const deleteRol = async(ctx:Context)=>{
    const {response} = ctx;

}