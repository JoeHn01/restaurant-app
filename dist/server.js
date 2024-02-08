import { ApolloServer } from '@apollo/server';
import express from 'express';
const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
