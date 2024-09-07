import { Router, Request, Response } from 'express';
import { locationsTR } from './TR/data/location';
const router = Router();

// Örnek veri

const countries: any = []

const FIND_RECOMMENDS = () => {
    return locationsTR.filter(item => item.recommended === true);
}


router.get('/recommends', (req: Request, res: Response) => {
    const result = FIND_RECOMMENDS()
    console.log(result, 'önerilernlernnn');

    res.json(result);
});

export default router;
