const { ApolloServer, gql } = require("apollo-server");
const SessionAPI = require("./datasources/sessions");
const typeDefs = require("./schema/schema");
const resolvers = require("./resolvers/resolvers");

const dataSources = () => ({
  SessionAPI: new SessionAPI(),
});

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`graphql is running at ${url}`);
});
