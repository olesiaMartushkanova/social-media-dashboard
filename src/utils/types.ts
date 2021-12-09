import { Theme } from '../context/ThemeContext';

export interface IThemeComponent {
  theme: ThemeType;
}

export type ThemeType = Theme.Dark | Theme.Light;
