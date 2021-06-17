import React from 'react';
import { AppBar, Button } from '@material-ui/core';

import { Themes } from '@Theming/material.types';
import { useThemeDispatch } from '@Theming/context.theme';

export const Navbar: React.FunctionComponent = () => {
  const dispatch = useThemeDispatch();

  const handleThemeToggle = () => {
    dispatch({
      type: Themes.DARK_THEME,
    });
  };

  return (
    <AppBar position='static'>
      <div>
        <Button onClick={handleThemeToggle}>theme</Button>
      </div>
    </AppBar>
  );
};
