"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearLog = exports.obtenerLogs = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const obtenerLogs = async (_req, res) => {
    const logs = await prisma.logSistema.findMany();
    res.json(logs);
};
exports.obtenerLogs = obtenerLogs;
const crearLog = async (req, res) => {
    const { tipo, mensaje, fecha, modulo } = req.body;
    const nuevo = await prisma.logSistema.create({
        data: { tipo, mensaje, fecha: new Date(fecha), modulo },
    });
    res.status(201).json(nuevo);
};
exports.crearLog = crearLog;
//# sourceMappingURL=logController.js.map