"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearEncuesta = exports.obtenerEncuestas = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const obtenerEncuestas = async (_req, res) => {
    const encuestas = await prisma.encuestaSatisfaccion.findMany();
    res.json(encuestas);
};
exports.obtenerEncuestas = obtenerEncuestas;
const crearEncuesta = async (req, res) => {
    const { fecha, puntuacion, comentario, usuarioId } = req.body;
    const nueva = await prisma.encuestaSatisfaccion.create({
        data: { fecha: new Date(fecha), puntuacion, comentario, usuarioId },
    });
    res.status(201).json(nueva);
};
exports.crearEncuesta = crearEncuesta;
//# sourceMappingURL=encuestaController.js.map