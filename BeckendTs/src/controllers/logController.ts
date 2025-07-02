import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const obtenerLogs = async (_req: Request, res: Response) => {
  const logs = await prisma.logSistema.findMany();
  res.json(logs);
};

export const crearLog = async (req: Request, res: Response) => {
  const { tipo, mensaje, fecha, modulo } = req.body;
  const nuevo = await prisma.logSistema.create({
    data: { tipo, mensaje, fecha: new Date(fecha), modulo },
  });
  res.status(201).json(nuevo);
};
