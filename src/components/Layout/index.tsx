import React from 'react';
import { ThemeProvider } from 'styled-components';

import darkTheme from '../../styles/themes/dark';
import lightTheme from '../../styles/themes/light';
import { useTheme } from '../../hooks/useTheme';

import { Container, Header } from './styles';

const Layout: React.FC = ({ children }) => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Container>
        <Header></Header>
        {children}
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
