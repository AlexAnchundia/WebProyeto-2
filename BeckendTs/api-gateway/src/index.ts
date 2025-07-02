import express, { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import { typeDefs } from './graphql/schema';
import { resolvers } from './graphql/resolvers';

async function startServer() {
  const app: Application = express(); // 👈 aquí está la corrección
    app.use(cors());

    const server = new ApolloServer({
    typeDefs,
    resolvers
    });

    await server.start();
    server.applyMiddleware({ app });

    const PORT = 4000;
    app.listen(PORT, () => {
    console.log(`🚀 API Gateway listo en http://localhost:${PORT}/graphql`);
    });
}

startServer();
