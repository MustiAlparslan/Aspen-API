import express, { Request, Response } from 'express';
import countryRoutes from './routes/country/countryRoutes';
import recommendsRoutes from "./routes/country/recommendedRoutes"
import popularRoutes from "./routes/country/popularRoutes"
import morgan from "morgan";
import cors from "cors"

const app = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(cors()); // CORS'u etkinleştir
app.use(express.json());
// Root endpoint
app.get('/', (req: Request, res: Response) => {
    res.send('Hello from Node.js API!');
});

// Country rotalarını kullan
app.use('/api', [countryRoutes, recommendsRoutes,popularRoutes ]);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
