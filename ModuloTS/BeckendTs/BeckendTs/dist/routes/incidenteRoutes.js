"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const incidenteController_1 = require("../controllers/incidenteController");
const router = (0, express_1.Router)();
router.get('/', incidenteController_1.obtenerIncidentes);
router.post('/', incidenteController_1.crearIncidente);
exports.default = router;
//# sourceMappingURL=incidenteRoutes.js.map