import { GraphQLServer, PubSub, withFilter } from "graphql-yoga";
import path from "path";
import resolvers from "../graphql/resolvers";

const pubsub = new PubSub();

export const server = new GraphQLServer({
  typeDefs: path.join(__dirname, "../graphql/typeDefs.graphql"),
  resolvers,
  context: { pubsub },
});

export default server;
