import express, {Application, Request, Response} from 'express';
import router from './router';

const app: Application = express();
const PORT: number = 3000;

app.use(express.json());

app.use("/", router);


// 1. GET http://localhost:3000/
app.get("/", (req: Request, res: Response): void => {
    res.status(200).json({ message: 'Hello, World!' });
});


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});