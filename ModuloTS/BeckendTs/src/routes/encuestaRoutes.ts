import { Router } from 'express';
import { crearEncuesta, obtenerEncuestas } from '../controllers/encuestaController';

const router: Router = Router();

router.get('/', obtenerEncuestas);
router.post('/', crearEncuesta);

export default router;
