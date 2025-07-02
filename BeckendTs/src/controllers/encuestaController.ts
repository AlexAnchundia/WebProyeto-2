import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const obtenerEncuestas = async (_req: Request, res: Response) => {
  const encuestas = await prisma.encuestaSatisfaccion.findMany();
  res.json(encuestas);
};

export const crearEncuesta = async (req: Request, res: Response) => {
  const { fecha, puntuacion, comentario, usuarioId } = req.body;
  const nueva = await prisma.encuestaSatisfaccion.create({
    data: { fecha: new Date(fecha), puntuacion, comentario, usuarioId },
  });
  res.status(201).json(nueva);
};
