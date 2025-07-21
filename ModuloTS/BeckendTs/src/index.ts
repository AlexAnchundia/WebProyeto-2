import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import encuestaRoutes from './routes/encuestaRoutes';
import incidenteRoutes from './routes/incidenteRoutes';
import logRoutes from './routes/logRoutes';
import reporteRoutes from './routes/reporteRoutes';
import soporteRoutes from './routes/soporteRoutes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/encuestas', encuestaRoutes);
app.use('/incidentes', incidenteRoutes);
app.use('/logs', logRoutes);
app.use('/reportes', reporteRoutes);
app.use('/soportes', soporteRoutes);

app.get('/', (_req: Request, res: Response) => {
  res.send('Microservicio de Análisis y Seguimiento funcionando');
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
