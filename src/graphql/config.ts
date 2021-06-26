import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GRAPHQL_CONSTANTS } from './constants';

export const client = new ApolloClient({
  uri: GRAPHQL_CONSTANTS.URI,
  cache: new InMemoryCache(),
});
