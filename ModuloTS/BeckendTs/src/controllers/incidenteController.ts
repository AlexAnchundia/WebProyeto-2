import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const obtenerIncidentes = async (_req: Request, res: Response) => {
  const incidentes = await prisma.incidente.findMany();
  res.json(incidentes);
};

export const crearIncidente = async (req: Request, res: Response) => {
  const { descripcion, estado, fechaReporte, usuarioId } = req.body;
  const nuevo = await prisma.incidente.create({
    data: { descripcion, estado, fechaReporte: new Date(fechaReporte), usuarioId },
  });
  res.status(201).json(nuevo);
};
