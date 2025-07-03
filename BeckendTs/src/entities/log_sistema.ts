export interface LogSistema {
  id: string;
  tipo: 'INFO' | 'WARNING' | 'ERROR';
  mensaje: string;
  fecha: Date;
  modulo: string;
}
