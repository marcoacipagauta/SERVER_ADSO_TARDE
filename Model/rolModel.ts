import { conexion } from "./conexion.ts";

interface RolData{
    idrol : number | null;
    descripcion: string;
}

export class Rol{
    public _ObjRol : RolData | null;
    public _idRol : number | null;

    constructor(ObjRol: RolData | null = null,idrol : number | null = null){
        this._ObjRol = ObjRol;
        this._idRol = idrol;
    }


    public async SeleccionarRoles():Promise<RolData[]>{
        const {rows: roles} = await conexion.execute(`select * from rol`);
        return roles as RolData[];
    }

}