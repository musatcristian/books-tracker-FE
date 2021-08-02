/* eslint-disable no-console */
import { ApolloClient, InMemoryCache, HttpLink, HttpOptions, from } from '@apollo/client';
import { API_URI } from './constants.graphql';
import { onError } from '@apollo/client/link/error';

const httpOptions: HttpOptions = {
  uri: API_URI,
  credentials: 'include',
  headers: {
    special: '',
  },
};

const errorLink = onError((error) => {
  throw new Error(JSON.stringify(error));
});

const httpLink = new HttpLink(httpOptions);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([errorLink, httpLink]),
});
