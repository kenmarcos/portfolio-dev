import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/clcp5d50504w901t9gjme2fck/master",
  cache: new InMemoryCache(),
});
