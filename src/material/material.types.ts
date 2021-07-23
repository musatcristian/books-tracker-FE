import { Theme } from '@material-ui/core';

export enum Themes {
  DARK_THEME = 'DARK_THEME',
  LIGHT_THEME = 'LIGHT_THEME',
}

export type ThemesType = Themes.DARK_THEME | Themes.LIGHT_THEME;

export interface IThemeAction {
  type: ThemesType;
}

export interface IThemeContext {
  theme: Theme;
  dispatch: React.Dispatch<IThemeAction>;
}
