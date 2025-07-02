import { Router } from 'express';
import { crearIncidente, obtenerIncidentes } from '../controllers/incidenteController';

const router: Router = Router();

router.get('/', obtenerIncidentes);
router.post('/', crearIncidente);

export default router;
