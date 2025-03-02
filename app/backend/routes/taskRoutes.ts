import { Router } from "express";
import * as taskController from "../controllers/taskController";

const router = Router();

router.get("/tasks", taskController.getTasks);
router.post("/tasks", taskController.addTask);
router.delete("/tasks/:id", taskController.removeTask);

export default router;