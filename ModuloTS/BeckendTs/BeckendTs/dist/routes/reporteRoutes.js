"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reporteController_1 = require("../controllers/reporteController");
const router = (0, express_1.Router)();
router.get('/', reporteController_1.obtenerReportes);
router.post('/', reporteController_1.crearReporte);
exports.default = router;
//# sourceMappingURL=reporteRoutes.js.map