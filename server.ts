import express from 'express';
const app: express.Application = express();


const PORT: number = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});