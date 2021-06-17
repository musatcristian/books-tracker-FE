import React, { createContext, useContext } from 'react';
import { darkTheme } from './dark.theme';
import { IThemeAction } from './material.types';

export const ThemeContext = createContext<React.Dispatch<IThemeAction>>(() => darkTheme);

export const useThemeDispatch = (): React.Dispatch<IThemeAction> => useContext(ThemeContext);
