import { ApolloServer, gql } from "apollo-server-micro";

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
};

export const config = {
  api: {
    bodyParser: false,
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });
module.exports = apolloServer.start().then(() => {
  return apolloServer.createHandler({ path: "/api/graphql" });
});
