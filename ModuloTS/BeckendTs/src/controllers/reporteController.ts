import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const obtenerReportes = async (_req: Request, res: Response) => {
  const reportes = await prisma.reporteUso.findMany();
  res.json(reportes);
};

export const crearReporte = async (req: Request, res: Response) => {
  const { fecha, moduloUsado, duracionSegundos, usuarioId } = req.body;
  const nuevo = await prisma.reporteUso.create({
    data: { fecha: new Date(fecha), moduloUsado, duracionSegundos, usuarioId },
  });
  res.status(201).json(nuevo);
};
