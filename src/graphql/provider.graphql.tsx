import React from 'react';
import { ApolloProvider } from '@apollo/client';

import { client } from './config';

export const DataProvider = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
