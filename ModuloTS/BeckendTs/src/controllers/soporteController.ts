import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const obtenerSoportes = async (_req: Request, res: Response) => {
  const soportes = await prisma.soporteCliente.findMany();
  res.json(soportes);
};

export const crearSoporte = async (req: Request, res: Response) => {
  const { mensaje, respuesta, fechaContacto, usuarioId } = req.body;
  const nuevo = await prisma.soporteCliente.create({
    data: { mensaje, respuesta, fechaContacto: new Date(fechaContacto), usuarioId },
  });
  res.status(201).json(nuevo);
};
