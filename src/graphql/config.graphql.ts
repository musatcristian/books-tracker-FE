import { ApolloClient, InMemoryCache, HttpLink, HttpOptions, from } from '@apollo/client';
import { GRAPHQL_CONSTANTS } from './constants.graphql';
import { onError } from '@apollo/client/link/error';

const httpOptions: HttpOptions = {
  uri: GRAPHQL_CONSTANTS.URI,
  credentials: 'include',
  headers: {
    special: '',
  },
};

const errorLink = onError((error) => {
  console.log(error);
});

const httpLink = new HttpLink(httpOptions);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([errorLink, httpLink]),
});
