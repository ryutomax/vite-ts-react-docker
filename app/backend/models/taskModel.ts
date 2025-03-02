import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllTasks = async () => {
  return await prisma.task.findMany();
};

export const createTask = async (text: string) => {
  return await prisma.task.create({ data: { text } });
};

export const deleteTask = async (id: number) => {
  return await prisma.task.delete({ where: { id } });
};