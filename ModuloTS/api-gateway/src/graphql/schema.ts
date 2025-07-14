import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    type EncuestaSatisfaccion {
    id: ID!
    fecha: String!
    puntuacion: Int!
    comentario: String!
    usuarioId: String!
    }

    type Incidente {
    id: ID!
    descripcion: String!
    estado: String!
    fechaReporte: String!
    usuarioId: String!
    }

    type LogSistema {
    id: ID!
    tipo: String!
    mensaje: String!
    fecha: String!
    modulo: String!
    }

    type ReporteUso {
    id: ID!
    fecha: String!
    moduloUsado: String!
    duracionSegundos: Int!
    usuarioId: String!
    }

    type SoporteCliente {
    id: ID!
    mensaje: String!
    respuesta: String!
    fechaContacto: String!
    usuarioId: String!
    }

    type Query {
    encuestas: [EncuestaSatisfaccion]
    incidentes: [Incidente]
    logs: [LogSistema]
    reportes: [ReporteUso]
    soportes: [SoporteCliente]
    }
`;
