import { getAnalyses } from '../services/analysis.service';

export const resolvers = {
    Query: {
    getAnalyses: async () => {
        return await getAnalyses();
    }
    }
};
