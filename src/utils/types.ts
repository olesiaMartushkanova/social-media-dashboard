import { Theme } from '../context/ThemeContext';

export interface ITheme {
  theme?: ThemeType;
}

export type ThemeType = Theme.Dark | Theme.Light;
