import { AppBar, Button } from '@material-ui/core';
import React from 'react';

import { Themes } from '@Theming/material.types';
import { useAddUserSubscription } from '@GraphQL/mutations';
// import { useVapidQuery } from '@GraphQL/queries';
import { useThemeDispatch } from '@Theming/context.theme';

const subscribeSW = () => {
  navigator.serviceWorker
    .getRegistration()
    .then((registration) =>
      registration?.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: 'BANLefKm79DWYH2N4QudOr3-9ndRt6_V-fRwxIOd451R3dUZuWC0dvmTNEYRN1XpBMAPJsrSGFudkM9qKs8Yh6I',
      })
    )
    .then((subscription) => {
      const str = JSON.stringify(subscription);
      // eslint-disable-next-line no-console
      console.info('Subscription is: ', str);
      useAddUserSubscription(str);
    })
    // eslint-disable-next-line no-console
    .catch((e) => console.info('Error is:', e));
};
export const Navbar: React.FunctionComponent = () => {
  const dispatch = useThemeDispatch();

  // const vapidPublicKey = useVapidQuery();
  // const [addUser] = useAddUserMutation('testName');

  const handleThemeToggle = () => {
    subscribeSW();
    dispatch({
      type: Themes.DARK_THEME,
    });
  };

  return (
    <AppBar position='static'>
      <Button onClick={handleThemeToggle}>Theme</Button>
    </AppBar>
  );
};
