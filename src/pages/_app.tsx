import React from 'react';
import { AppProps } from 'next/app';

import Layout from '../components/Layout';
import GlobalStyles from '../styles/global';
import AppProvider from '../hooks';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AppProvider>
      <Layout>
        <GlobalStyles />
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
};

export default MyApp;
