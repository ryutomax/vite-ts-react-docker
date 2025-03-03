import { Request, Response } from "express";
import * as taskModel from "../models/taskModel";

export const getTasks = async (_req: Request, res: Response) => {
  const tasks = await taskModel.getAllTasks();
  res.json(tasks);
};

export const addTask = async (req: Request, res: Response) => {
  const { text } = req.body;
  const task = await taskModel.createTask(text);
  res.json(task);
};

export const removeTask = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  await taskModel.deleteTask(id);
  res.status(204).end();
};