
import { conexion } from "./conexion.ts";
import { z } from "../Dependencies/dependencias.ts";

interface UserData{
    idusuario : number | null;
    documento: string;
    nombres: string;
    apellidos: string;
    email: string;
    telefono: string;
    password:string;
}

interface UserList extends UserData{
    rol_idrol:number
}


interface LoginData{
    email:string;
    password:string;
}


export class Usuario{

    public _ObjUsuario : UserData | null;
    public _idUsuario : number | null;
    public _ObjLoginUsuario: LoginData | null;

    constructor(ObjUsuario: UserData | null = null,idUsuario : number | null = null,ObjLoginUsuario: LoginData | null = null){
        this._ObjUsuario = ObjUsuario;
        this._idUsuario = idUsuario;
        this._ObjLoginUsuario = ObjLoginUsuario;
    }

    public async SeleccionarUsuarios():Promise<UserList[]>{
        const {rows: users} = await conexion.execute(`select * ,rol.descripcion as rol from usuario inner join rol on usuario.rol_idrol = rol.idrol`);
        return users as UserList[];
    }

    public async iniciarSesion(): Promise<| { success: true; message: string; data: Record<string, any>} | { success: false; message: string; data?: undefined }
    >{
        try {

            const email = this._ObjLoginUsuario?.email;
            const password = this._ObjLoginUsuario?.password;

            const[usuario] = await conexion.query(`SELECT * FROM usuario WHERE email=?`,[email]);

            if (password === usuario.password){
                return {
                    success:true,
                    message: "Sesion iniciada correctamente",
                    data: usuario,
                }
            }else{
                return {
                    success: false,
                    message: "Usuario no encontrado credenciales incorrectas"
                }
            }
        } catch (error) {
            if (error instanceof z.ZodError){
                return {success: false,message: error.message};
            }else{
                return {success:false,message:"error interno del servidor"};
            }
        }
    }

}
