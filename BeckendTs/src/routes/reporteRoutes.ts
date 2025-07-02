import { Router } from 'express';
import { crearReporte, obtenerReportes } from '../controllers/reporteController';

import type { Router as ExpressRouter } from 'express';
const router: ExpressRouter = Router();

router.get('/', obtenerReportes);
router.post('/', crearReporte);

export default router;
