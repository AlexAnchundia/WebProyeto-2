import { Router } from 'express';
import { crearLog, obtenerLogs } from '../controllers/logController';

const router: Router = Router();

router.get('/', obtenerLogs);
router.post('/', crearLog);

export default router;
