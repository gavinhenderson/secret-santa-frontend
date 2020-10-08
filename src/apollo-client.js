import { ApolloClient, InMemoryCache } from "@apollo/client";

import { graphqlEndpoint } from "./config";

export const client = new ApolloClient({
  uri: graphqlEndpoint,
  cache: new InMemoryCache(),
});
