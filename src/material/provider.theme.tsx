import React, { useReducer } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import { themeReducer } from './reducer.theme';
import { lightTheme } from './light.theme';
import { ThemeContext } from './context.theme';

export const Theming = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  const [theme, dispatch] = useReducer(themeReducer, lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={dispatch}>{children}</ThemeContext.Provider>
    </ThemeProvider>
  );
};
