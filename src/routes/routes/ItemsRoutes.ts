import { Router, Request, Response } from 'express';
import { countries } from '../data/countries';
import { categories } from '../data/categories';
const router = Router();

const items = [
    { id: 1, name: 'Istanbul', country: 'TR', category: 'location' },
    { id: 2, name: 'Cappadocia', country: 'TR', category: 'adventures' },
    { id: 3, name: 'Antalya Resort', country: 'TR', category: 'hotels' },
    { id: 4, name: 'Paella', country: 'ES', category: 'foods' },
    { id: 5, name: 'Madrid', country: 'ES', category: 'location' },
    { id: 6, name: 'Barcelona Beach', country: 'ES', category: 'adventures' },
    { id: 7, name: 'New York', country: 'US', category: 'location' },
];

router.get('/items', async (req, res) => {
    const { country, category,popular } = req.query;

    const filteredItems = items.filter(item =>
        item.country === country && item.category === category
    );

    res.json(filteredItems);
});




export default router;
