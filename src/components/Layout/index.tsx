import React from 'react';
import { ThemeProvider } from 'styled-components';

import Header from './Header';
import darkTheme from '../../styles/themes/dark';
import lightTheme from '../../styles/themes/light';
import { useTheme } from '../../hooks/useTheme';

const Layout: React.FC = ({ children }) => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <main>
        <Header />
        {children}
      </main>
    </ThemeProvider>
  );
};

export default Layout;
