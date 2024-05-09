import { Router } from "express";
import { addTask } from "../controller/todoController.js";

const router = Router();

router.post('/', addTask)

export default router;