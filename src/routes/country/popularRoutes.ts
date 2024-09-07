import { Router, Request, Response } from 'express';
import { locationsTR } from './TR/data/location';
const router = Router();

// Örnek veri

const FIND_POPULAR = () => {
    return locationsTR.filter(item => item?.popular === true);
}


router.get('/popular', (req: Request, res: Response) => {
    const result = FIND_POPULAR()
    console.log(result, 'önerilernlernnn');

    res.json(result);
});

export default router;
