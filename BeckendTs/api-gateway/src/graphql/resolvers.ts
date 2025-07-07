import axios from 'axios';

const BASE_URL = 'http://localhost:3003'; // Cambia si tu microservicio está en otro puerto

export const resolvers = {
    Query: {
    encuestas: async () => (await axios.get(`${BASE_URL}/encuestas`)).data,
    incidentes: async () => (await axios.get(`${BASE_URL}/incidentes`)).data,
    logs: async () => (await axios.get(`${BASE_URL}/logs`)).data,
    reportes: async () => (await axios.get(`${BASE_URL}/reportes`)).data,
    soportes: async () => (await axios.get(`${BASE_URL}/soportes`)).data
    }
};
