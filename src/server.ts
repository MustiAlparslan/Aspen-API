import express, { Request, Response } from 'express';
import GetRoutes from './routes/routes/GetRoutes';
import recommendsRoutes from "./routes/routes/recommendedRoutes"
import ItemsRoutes from "./routes/routes/ItemsRoutes"
import popularRoutes from "./routes/routes/popularRoutes"
import morgan from "morgan";
import cors from "cors"

const app = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

// Root endpoint
app.get('/', (req: Request, res: Response) => {
    res.send('Hello from Node.js API!');
});


app.use('/api', [GetRoutes, recommendsRoutes, popularRoutes, ItemsRoutes]);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
