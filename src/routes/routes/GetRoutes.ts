import { Router, Request, Response } from 'express';
import { countries } from '../data/countries';
import { categories } from '../data/categories';
const router = Router();



router.get('/countries', (req: Request, res: Response) => {
    res.json(countries);
});

router.get('/categories', (req: Request, res: Response) => {
    res.json(categories);
});


// Belirli bir ülkeyi getir
// router.get('/countries/:name', (req: Request, res: Response) => {
//     const country = countries.find(
//         (c) => c.name.toLowerCase() === req.params.name.toLowerCase()
//     );

//     if (country) {
//         res.json(country);
//     } else {
//         res.status(404).json({ message: 'Country not found' });
//     }
// });

export default router;
