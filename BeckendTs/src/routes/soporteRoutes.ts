import { Router } from 'express';
import { crearSoporte, obtenerSoportes } from '../controllers/soporteController';

const router: Router = Router();

router.get('/', obtenerSoportes);
router.post('/', crearSoporte);

export default router;
