import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    type Analysis {
        id: String
        descripcion: String
        fecha: String
    }

    type Query {
        getAnalyses: [Analysis]
    }
`;
