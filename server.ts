import express from 'express';
const app: express.Application = express();

// 1. GET http://localhost:3000/
app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello, World!');
});

const PORT: number = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});