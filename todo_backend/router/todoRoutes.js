import { Router } from "express"
import { addTask, allTasks, deleteTask, updateTask } from "../controller/todoController.js";

const router = Router();

router.post('/', addTask)
router.get('/', allTasks)
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)


export default router;