"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cors_1 = require("cors");
const dotenv_1 = require("dotenv");
const encuestaRoutes_1 = require("./routes/encuestaRoutes");
const incidenteRoutes_1 = require("./routes/incidenteRoutes");
const logRoutes_1 = require("./routes/logRoutes");
const reporteRoutes_1 = require("./routes/reporteRoutes");
const soporteRoutes_1 = require("./routes/soporteRoutes");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/encuestas', encuestaRoutes_1.default);
app.use('/incidentes', incidenteRoutes_1.default);
app.use('/logs', logRoutes_1.default);
app.use('/reportes', reporteRoutes_1.default);
app.use('/soportes', soporteRoutes_1.default);
app.get('/', (_req, res) => {
    res.send('Microservicio de Análisis y Seguimiento funcionando');
});
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map