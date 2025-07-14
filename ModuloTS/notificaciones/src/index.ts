import express from 'express';
import { WebSocketServer } from 'ws';
import http from 'http';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const wss = new WebSocketServer({ server });

let clientes: Set<any> = new Set();

// Cuando un cliente se conecta al WebSocket
wss.on('connection', (ws) => {
  console.log('🟢 Cliente conectado');
  clientes.add(ws);

  ws.on('close', () => {
    console.log('🔴 Cliente desconectado');
    clientes.delete(ws);
  });
});

// Endpoint para recibir eventos desde otros microservicios
app.post('/notificar', (req, res) => {
  const { tipo, mensaje, modulo } = req.body;

  const payload = JSON.stringify({
    tipo,
    mensaje,
    modulo,
    timestamp: new Date().toISOString(),
  });

  // Enviar a todos los clientes conectados
  clientes.forEach((cliente) => {
    try {
      cliente.send(payload);
    } catch (err) {
      console.error('❌ Error enviando a cliente:', err);
    }
  });

  res.status(200).json({ success: true });
});

// Iniciar el servidor
const PORT = 4001;
server.listen(PORT, () => {
  console.log(`🚀 Servicio de Notificaciones WebSocket en http://localhost:${PORT}`);
});
