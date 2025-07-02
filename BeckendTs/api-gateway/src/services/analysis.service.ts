import axios from 'axios';

const BASE_URL = 'http://localhost:3005/api';

export const getAnalyses = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/analisis`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener análisis:', error);
    return [];
  }
};
