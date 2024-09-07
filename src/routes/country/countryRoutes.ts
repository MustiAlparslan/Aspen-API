import { Router, Request, Response } from 'express';
const router = Router();

// Örnek veri

const countries: any = []

// Tüm ülkeleri getir
router.get('/countries', (req: Request, res: Response) => {
    res.json(countries);
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
