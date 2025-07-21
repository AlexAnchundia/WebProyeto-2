"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearReporte = exports.obtenerReportes = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const obtenerReportes = async (_req, res) => {
    const reportes = await prisma.reporteUso.findMany();
    res.json(reportes);
};
exports.obtenerReportes = obtenerReportes;
const crearReporte = async (req, res) => {
    const { fecha, moduloUsado, duracionSegundos, usuarioId } = req.body;
    const nuevo = await prisma.reporteUso.create({
        data: { fecha: new Date(fecha), moduloUsado, duracionSegundos, usuarioId },
    });
    res.status(201).json(nuevo);
};
exports.crearReporte = crearReporte;
//# sourceMappingURL=reporteController.js.map