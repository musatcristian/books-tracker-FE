import { AppBar, Button } from '@material-ui/core';
import React from 'react';

import { Themes } from '@Theming/material.types';
import { useAddUserMutation } from '@GraphQL/mutations';
import { useThemeDispatch } from '@Theming/context.theme';

export const Navbar: React.FunctionComponent = () => {
  const dispatch = useThemeDispatch();

  const [addUser] = useAddUserMutation('testName');

  const handleThemeToggle = () => {
    addUser();
    dispatch({
      type: Themes.DARK_THEME,
    });
  };

  return (
    <AppBar position='static'>
      <div>
        <Button onClick={handleThemeToggle}>Theme</Button>
      </div>
    </AppBar>
  );
};
