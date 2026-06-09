import {Router, Request, Response} from 'express';
import axios from "axios";

const router = Router();
const API_URL = "http://jsonplaceholder.typicode.com";

router.get("/users", async (req: Request, res: Response) => {
    const response = await axios.get(`${API_URL}/users`);
    res.status(200).json(response.data);
});

router.post("/posts", async (req: Request, res: Response) => {
    const response = await axios.post(`${API_URL}/posts`, req.body);
    res.status(201).json(response.data);
});

router.delete("/posts/:id", async (req: Request, res: Response) => {
    const response = await axios.delete(`${API_URL}/posts/${req.params.id}`);
    res.status(200).json(response.data);
});

export default router;