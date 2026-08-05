
import { conexion } from "./conexion.ts";
import { z } from "../Dependencies/dependencias.ts";

interface UserData{
    idusuario : number | null;
    documento: string;
    nombres: string;
    apellidos: string;
    email: string;
    telefono: string;
    rol_idrol: number;
}


export class Usuario{

    public _ObjUsuario : UserData | null;
    public _idUsuario : number | null;

    constructor(ObjUsuario: UserData | null = null,idUsuario : number | null = null){
        this._ObjUsuario = ObjUsuario;
        this._idUsuario = idUsuario;
    }

    public async SeleccionarUsuarios():Promise<UserData[]>{
        const {rows: users} = await conexion.execute(`select * ,rol.descripcion as rol from usuario inner join rol on usuario.rol_idrol = rol.idrol`);
        return users as UserData[];
    }

}
