import { Router, Request, Response } from 'express';
import { locationsTR } from '../countries/TR/data/location';
import { hotelsTR } from '../countries/TR/data/hotel';
import { foodsTR } from '../countries/TR/data/food';
import { adventuresTR } from '../countries/TR/data/adventure';
import { locationsIT } from '../countries/IT/data/location';
import { hotelsIT } from '../countries/IT/data/hotel';
import { foodsIT } from '../countries/IT/data/food';
import { adventuresIT } from '../countries/IT/data/adventure';

const router = Router();

const FIND_POPULAR = (country: string | any, category: string | any) => {
    if (country === "TR")
        switch (category.toLowerCase()) {
            case 'location':
                return locationsTR.filter(item => item.popular === true);
                break;
            case 'hotels':
                return hotelsTR.filter(item => item.popular === true);
                break;
            case 'food':
                return foodsTR.filter(item => item.popular === true);
                break;
            case 'adventure':
                return adventuresTR.filter(item => item.popular === true);
                break;
            default:
                break;
        }
    else if (country === "IT") {
        switch (category.toLowerCase()) {
            case 'location':
                return locationsIT.filter(item => item.popular === true);
                break;
            case 'hotels':
                return hotelsIT.filter(item => item.popular === true);
                break;
            case 'food':
                return foodsIT.filter(item => item.popular === true);
                break;
            case 'adventure':
                return adventuresIT.filter(item => item.popular === true);
                break;
            default:
                break;
        }
    } else {
        return "Not found!"
    }
}


router.get('/popular', (req: Request, res: Response) => {
    const { country, category } = req.query;
    const result = FIND_POPULAR(country, category)
    res.json(result);
});

export default router;
