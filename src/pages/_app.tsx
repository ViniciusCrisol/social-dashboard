import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { useTheme } from '../hooks/useTheme';
import GlobalStyles from '../styles/global';
import AppProvider from '../hooks';

import darkTheme from '../styles/themes/dark';
import lightTheme from '../styles/themes/light';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { theme } = useTheme();

  return (
    <AppProvider>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </AppProvider>
  );
};

export default MyApp;
