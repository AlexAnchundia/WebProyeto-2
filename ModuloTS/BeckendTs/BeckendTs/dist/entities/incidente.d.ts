export interface Incidente {
    id: string;
    descripcion: string;
    estado: 'abierto' | 'en_progreso' | 'cerrado';
    fechaReporte: Date;
    usuarioId: string;
}
