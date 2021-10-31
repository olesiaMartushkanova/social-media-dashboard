import { createContext, useContext } from 'react';

export enum Theme {
  Dark = 'Dark',
  Light = 'Light',
}

export type ThemeContextType = {
  theme: Theme;
  setTheme: (Theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: Theme.Dark,
  setTheme: () => {
    /* eslint-disable no-console */
    console.warn('no theme provider');
  },
});
export const useTheme = () => useContext(ThemeContext);
