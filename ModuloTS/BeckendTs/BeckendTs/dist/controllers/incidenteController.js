"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearIncidente = exports.obtenerIncidentes = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const obtenerIncidentes = async (_req, res) => {
    const incidentes = await prisma.incidente.findMany();
    res.json(incidentes);
};
exports.obtenerIncidentes = obtenerIncidentes;
const crearIncidente = async (req, res) => {
    const { descripcion, estado, fechaReporte, usuarioId } = req.body;
    const nuevo = await prisma.incidente.create({
        data: { descripcion, estado, fechaReporte: new Date(fechaReporte), usuarioId },
    });
    res.status(201).json(nuevo);
};
exports.crearIncidente = crearIncidente;
//# sourceMappingURL=incidenteController.js.map