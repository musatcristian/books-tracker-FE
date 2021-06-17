import { Theme } from '@material-ui/core';

import { darkTheme } from './dark.theme';
import { lightTheme } from './light.theme';
import { IThemeAction, Themes } from './material.types';

export const themeReducer = (state: Theme, action: IThemeAction): Theme => {
  switch (action.type) {
    case Themes.DARK_THEME: {
      return darkTheme;
    }
    case Themes.LIGHT_THEME: {
      return lightTheme;
    }
    default:
      return state;
  }
};
