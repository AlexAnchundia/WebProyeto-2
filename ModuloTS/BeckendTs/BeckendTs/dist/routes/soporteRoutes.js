"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const soporteController_1 = require("../controllers/soporteController");
const router = (0, express_1.Router)();
router.get('/', soporteController_1.obtenerSoportes);
router.post('/', soporteController_1.crearSoporte);
exports.default = router;
//# sourceMappingURL=soporteRoutes.js.map