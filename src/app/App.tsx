import React from 'react';
import { CssBaseline } from '@material-ui/core';

import { Theming } from '@Theming/provider.theme';

import { Navbar } from '@Components/navbar';

export const App: React.FunctionComponent = () => {
  return (
    <Theming>
      <CssBaseline />
      <main>
        <Navbar />
        Main content
      </main>
    </Theming>
  );
};
