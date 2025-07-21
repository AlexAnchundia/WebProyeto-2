"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const encuestaController_1 = require("../controllers/encuestaController");
const router = (0, express_1.Router)();
router.get('/', encuestaController_1.obtenerEncuestas);
router.post('/', encuestaController_1.crearEncuesta);
exports.default = router;
//# sourceMappingURL=encuestaRoutes.js.map