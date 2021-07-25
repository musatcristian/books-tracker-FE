import React from 'react';
import { CssBaseline } from '@material-ui/core';

import { Theming } from '@Theming/provider.theme';
import { DataProvider } from '@GraphQL/provider.graphql';

import { Navbar } from '@Components/navbar';
import { BooksProvider } from '@Contexts/index';
import { UserProvider } from '@Contexts/user.context';

export const App: React.FunctionComponent = () => {
  return (
    <DataProvider>
      <UserProvider>
        <BooksProvider>
          <Theming>
            <CssBaseline />
            <main>
              <Navbar />
              App version 0.1.0
            </main>
          </Theming>
        </BooksProvider>
      </UserProvider>
    </DataProvider>
  );
};
