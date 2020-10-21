import React, { createContext, useState, useCallback, useContext } from 'react';
import cookie from 'js-cookie';

type ITheme = 'light' | 'dark';

interface IThemeProvider {
  theme: 'light' | 'dark';
  toggleTheme(): void;
}

const ThemeContext = createContext<IThemeProvider>({} as IThemeProvider);

const ThemeProvider: React.FC = ({ children }) => {
  const [activeTheme, setActiveTheme] = useState<ITheme>(() => {
    const theme = cookie.get('@SocialDashboard:theme') as ITheme | undefined;

    if (theme) return theme;

    return 'light';
  });

  const toggleTheme = useCallback(() => {
    const updatedTheme = activeTheme === 'light' ? 'dark' : 'light';
    cookie.set('@SocialDashboard:theme', updatedTheme);
    setActiveTheme(updatedTheme);
  }, [cookie, activeTheme]);

  return (
    <ThemeContext.Provider value={{ theme: activeTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme(): IThemeProvider {
  const context = useContext(ThemeContext);

  return context;
}

export { ThemeProvider, useTheme };
