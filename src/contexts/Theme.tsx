import { createContext, ReactNode, useCallback } from 'react';
import { DefaultTheme, ThemeProvider as ThemeProviderContext } from 'styled-components';

import { light } from 'styles/themes';
import usePersistedTheme from 'utils/persisted-theme';

export type IThemeHook = {
  theme: DefaultTheme;
  toggleTheme: () => void;
};

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext({} as IThemeHook);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = usePersistedTheme<DefaultTheme>(
    'notion',
    light,
  );

  const toggleTheme = useCallback(() => {
    const selectedTheme = theme.title === 'light' ? light : light;
    setTheme(selectedTheme);
  }, [setTheme, theme.title]);

  return (
    <ThemeProviderContext theme={theme}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProviderContext>
  );
};
