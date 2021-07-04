import { ApolloProvider } from '@apollo/client';
import React from 'react';

import { client } from './config.graphql';

export const DataProvider = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
