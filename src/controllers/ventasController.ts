import {Request, Response} from 'express';
//import pool from '../database';

class VentasController {

    /*public index (req: Request, res:Response) {
        pool.query("SELECT * FROM users");
        res.json('empleados');
    }*/

    public list (req:Request,res:Response){
        res.json({text: 'Listando ventas'});
    }

    public getOne (req:Request,res:Response){
        res.json({text: 'Mostrando venta'});
    }

    public create (req:Request,res:Response){
        console.log(req.body);
        res.json({text: 'Registrando venta'});
    }

    public delete(req:Request, res:Response){
        res.json({text: 'Eliminando venta' });
    }

    public update(req:Request, res:Response){
        res.json({text: 'Actualizando venta' /*+ req.params.id*/});
    }
}

const ventasController = new VentasController ();
export default ventasController;