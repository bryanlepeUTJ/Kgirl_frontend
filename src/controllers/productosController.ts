import {Request, Response} from 'express';
//import pool from '../database';

class ProductosController {

    /*public index (req: Request, res:Response) {
        pool.query("SELECT * FROM users");
        res.json('empleados');
    }*/

    public list (req:Request,res:Response){
        res.json({text: 'Listando productos'});
    }

    public getOne (req:Request,res:Response){
        res.json({text: 'Mostrando producto'});
    }

    public create (req:Request,res:Response){
        console.log(req.body);
        res.json({text: 'Registrando producto'});
    }

    public delete(req:Request, res:Response){
        res.json({text: 'Eliminando producto' });
    }

    public update(req:Request, res:Response){
        res.json({text: 'Actualizando producto' /*+ req.params.id*/});
    }
}

const productosController = new ProductosController ();
export default productosController;