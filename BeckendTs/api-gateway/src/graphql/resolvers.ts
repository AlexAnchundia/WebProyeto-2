import axios from 'axios';

export const resolvers = {
    Query: {
    encuestas: async () => {
        const response = await axios.get('http://localhost:3003/encuestas');
        return response.data;
    }
    }
};
