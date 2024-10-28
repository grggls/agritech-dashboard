import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the Regenerative Agriculture Dashboard API');
});

export default app;