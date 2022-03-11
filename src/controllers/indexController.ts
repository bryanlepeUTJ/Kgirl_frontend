import {Request, Response} from 'express';

class IndexController {

    public index (req: Request, res:Response) {
        res.json({text: 'La API esta en...'})
    }
}

export const indexController = new IndexController ();