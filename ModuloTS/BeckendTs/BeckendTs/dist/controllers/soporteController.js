"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearSoporte = exports.obtenerSoportes = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const obtenerSoportes = async (_req, res) => {
    const soportes = await prisma.soporteCliente.findMany();
    res.json(soportes);
};
exports.obtenerSoportes = obtenerSoportes;
const crearSoporte = async (req, res) => {
    const { mensaje, respuesta, fechaContacto, usuarioId } = req.body;
    const nuevo = await prisma.soporteCliente.create({
        data: { mensaje, respuesta, fechaContacto: new Date(fechaContacto), usuarioId },
    });
    res.status(201).json(nuevo);
};
exports.crearSoporte = crearSoporte;
//# sourceMappingURL=soporteController.js.map