"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const logController_1 = require("../controllers/logController");
const router = (0, express_1.Router)();
router.get('/', logController_1.obtenerLogs);
router.post('/', logController_1.crearLog);
exports.default = router;
//# sourceMappingURL=logRoutes.js.map