import {Request, Response} from 'express';
//import pool from '../database';

class EmpleadosController {

    /*public index (req: Request, res:Response) {
        pool.query("SELECT * FROM users");
        res.json('empleados');
    }*/

    public list (req:Request,res:Response){
        res.json({text: 'Listando usuarios'});
    }

    public getOne (req:Request,res:Response){
        res.json({text: 'Mostrando usuario'});
    }

    public create (req:Request,res:Response){
        console.log(req.body);
        res.json({text: 'Registrando usuario'});
    }

    public delete(req:Request, res:Response){
        res.json({text: 'Eliminando usuario' });
    }

    public update(req:Request, res:Response){
        res.json({text: 'Actualizando usuario' /*+ req.params.id*/});
    }
}

const empleadosController = new EmpleadosController ();
export default empleadosController;