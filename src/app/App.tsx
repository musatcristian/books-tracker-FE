import React from 'react';
import { CssBaseline } from '@material-ui/core';

import { Theming } from '@Theming/provider.theme';
import { DataProvider } from '../graphql/provider.graphql';

import { Navbar } from '@Components/navbar';

export const App: React.FunctionComponent = () => {
  return (
    <DataProvider>
      <Theming>
        <CssBaseline />
        <main>
          <Navbar />
          Main content
        </main>
      </Theming>
    </DataProvider>
  );
};
