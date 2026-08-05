import {Usuario} from "../Model/userModel.ts";
import { Context } from "../Dependencies/dependencias.ts";

export const getUsers = async(ctx:Context)=>{
    const {response} = ctx;

    try {
        const ObjUsuario =  new Usuario();
        const ListaUsuarios = await ObjUsuario.SeleccionarUsuarios();
        response.status = 200;
        response.body = {
            success: true,
            data:ListaUsuarios,
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


export const postUsers = async(ctx:Context)=>{


}

export const putUsers = async(ctx:Context)=>{
    const {response, request} = ctx;

    const lista = await request.body.json();

    console.log(lista);

    response.status = 200;
    response.body = {
        success: true,
        data: lista,
    };
}


export const deleteUsers = async(ctx:Context)=>{



}